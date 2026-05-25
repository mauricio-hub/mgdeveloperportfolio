import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { experience } from "../../data/experience";
import { projects } from "../../data/projects";
import { personal } from "../../data/personal";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── Tool definitions ─────────────────────────────────────────────────────────

const tools: Anthropic.Tool[] = [
  {
    name: "get_experience",
    description: "Returns Mauricio's work experience. Optionally filter by company name or technology stack.",
    input_schema: {
      type: "object" as const,
      properties: {
        filter: {
          type: "string",
          description: "Optional keyword to filter by company name or technology (e.g. 'Django', 'Enersinc', 'React')",
        },
      },
      required: [],
    },
  },
  {
    name: "get_projects",
    description: "Returns Mauricio's portfolio projects. Optionally filter by technology or industry.",
    input_schema: {
      type: "object" as const,
      properties: {
        filter: {
          type: "string",
          description: "Optional keyword to filter projects by technology or topic (e.g. 'AI', 'Next.js', 'SaaS')",
        },
      },
      required: [],
    },
  },
  {
    name: "get_availability",
    description: "Returns Mauricio's current availability and how to contact him.",
    input_schema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
  {
    name: "get_stack",
    description: "Returns Mauricio's full technical stack and main skills.",
    input_schema: {
      type: "object" as const,
      properties: {},
      required: [],
    },
  },
];

// ─── Tool execution ───────────────────────────────────────────────────────────

function executeTool(name: string, input: Record<string, string>): string {
  switch (name) {
    case "get_experience": {
      const keyword = input.filter?.toLowerCase();
      const results = keyword
        ? experience.filter(
            (e) =>
              e.company.toLowerCase().includes(keyword) ||
              e.stack.some((s) => s.toLowerCase().includes(keyword))
          )
        : experience;

      return JSON.stringify(
        results.map((e) => ({
          company: e.company,
          role: e.role.en,
          period: e.period,
          stack: e.stack,
          achievements: e.achievements.en,
        }))
      );
    }

    case "get_projects": {
      const keyword = input.filter?.toLowerCase();
      const results = keyword
        ? projects.filter(
            (p) =>
              p.stack.some((s) => s.toLowerCase().includes(keyword)) ||
              p.title.toLowerCase().includes(keyword) ||
              p.description.en.toLowerCase().includes(keyword)
          )
        : projects;

      return JSON.stringify(
        results.map((p) => ({
          title: p.title,
          client: p.client,
          description: p.description.en,
          stack: p.stack,
          result: p.result.en,
        }))
      );
    }

    case "get_availability": {
      return JSON.stringify({
        available: true,
        types: ["Freelance", "Full-time"],
        contact: "LinkedIn",
        linkedin: personal.linkedin,
        note: "Best way to reach Mauricio is through LinkedIn.",
      });
    }

    case "get_stack": {
      const allStack = [...new Set(experience.flatMap((e) => e.stack))];
      return JSON.stringify({
        stack: allStack,
        summary: personal.summary,
      });
    }

    default:
      return JSON.stringify({ error: "Unknown tool" });
  }
}

// ─── System prompt ────────────────────────────────────────────────────────────

const SYSTEM_PROMPT = `You are an AI agent representing Mauricio González, a Full-Stack Developer specialized in AI integration.

You have tools to look up his real experience, projects, stack, and availability. Always use the appropriate tool before answering questions about these topics — do not answer from memory alone.

Guidelines:
- Be concise and professional but human
- Answer in the same language the user writes in (Spanish or English)
- When someone asks about contacting Mauricio, always provide his LinkedIn URL
- If asked whether you are an agent or just a chatbot: explain that you use tool calls to fetch real data, which makes you an agent
- Never invent experience or skills`;

// ─── Agentic loop ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const agentMessages: Anthropic.MessageParam[] = [...messages];

    // Agentic loop: keep running until Claude stops calling tools
    while (true) {
      const response = await client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        tools,
        messages: agentMessages,
      });

      // Claude finished — return the text response
      if (response.stop_reason === "end_turn") {
        const text = response.content
          .filter((b) => b.type === "text")
          .map((b) => (b as Anthropic.TextBlock).text)
          .join("");
        return NextResponse.json({ text });
      }

      // Claude wants to call tools
      if (response.stop_reason === "tool_use") {
        // Add Claude's response (with tool_use blocks) to the conversation
        agentMessages.push({ role: "assistant", content: response.content });

        // Execute each tool Claude requested
        const toolResults: Anthropic.ToolResultBlockParam[] = response.content
          .filter((b) => b.type === "tool_use")
          .map((b) => {
            const block = b as Anthropic.ToolUseBlock;
            const result = executeTool(block.name, block.input as Record<string, string>);
            return {
              type: "tool_result" as const,
              tool_use_id: block.id,
              content: result,
            };
          });

        // Add tool results back so Claude can continue reasoning
        agentMessages.push({ role: "user", content: toolResults });

        // Loop again so Claude can read the results and respond
        continue;
      }

      // Unexpected stop reason
      break;
    }

    return NextResponse.json({ text: "" });
  } catch (error) {
    console.error("Agent error:", error);
    return NextResponse.json({ error: "Agent failed" }, { status: 500 });
  }
}
