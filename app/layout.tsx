import type { Metadata } from "next";
import { Space_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import LanguageProvider from "./lib/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauricio González – Full-Stack Developer & AI Integration",
  description:
    "Full-Stack Developer with 5+ years building scalable, AI-powered web applications. Expert in React, Next.js, TypeScript, Node.js, Python and Django. Available for freelance projects.",
  keywords: [
    // Name & identity
    "Mauricio González",
    "Mauricio Gonzalez developer",
    "bymauriciog",
    // Roles (EN)
    "Full-Stack Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Developer",
    "Freelance Developer",
    "Freelance Programmer",
    "AI Developer",
    "AI Integration Developer",
    "SaaS Developer",
    // Roles (ES)
    "Desarrollador Full Stack",
    "Desarrollador Web",
    "Programador Freelance",
    "Desarrollador Freelance",
    "Programador Web",
    "Ingeniero de Software",
    // Technologies
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Django",
    "PostgreSQL",
    "REST API",
    "Docker",
    "Redux",
    "Tailwind CSS",
    "Framer Motion",
    "OpenAI",
    "Claude API",
    "Anthropic",
    "LangChain",
    "Supabase",
    "Prisma",
    // Location & context
    "Colombia",
    "Remote Developer",
    "Remote Programmer",
    "Desarrollador Colombia",
    "Desarrollador Remoto",
    "LATAM Developer",
    // Services
    "hire developer",
    "contratar programador",
    "contratar desarrollador",
    "freelance web development",
    "custom web application",
    "aplicaciones web a medida",
    "portfolio developer",
  ],
  authors: [{ name: "Mauricio González" }],
  creator: "Mauricio González",
  metadataBase: new URL("https://bymauriciog.com"),
  alternates: {
    canonical: "https://bymauriciog.com",
  },
  openGraph: {
    title: "Mauricio González – Full-Stack Developer & AI Integration",
    description:
      "Full-Stack Developer with 5+ years building scalable, AI-powered web applications. React, Next.js, TypeScript, Node.js, Python. Available for freelance.",
    type: "website",
    locale: "en_US",
    url: "https://bymauriciog.com",
    siteName: "Mauricio González – Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mauricio González – Full-Stack Developer & AI Integration",
    description:
      "Full-Stack Developer with 5+ years building scalable, AI-powered web applications. React, Next.js, TypeScript, Node.js, Python.",
    creator: "@mauriciog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" translate="no" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mauricio González",
              url: "https://bymauriciog.com",
              email: "mauriciogonzalezdeveloper@gmail.com",
              jobTitle: "Full-Stack Developer & AI Integration",
              description:
                "Full-Stack Engineer with 5 years of experience building scalable, AI-powered applications. Expert in React, Next.js, TypeScript, Node.js, and Python.",
              sameAs: [
                "https://www.linkedin.com/in/mauricio-gonzalez-frontend-developer/",
                "https://github.com/mauricio-hub",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "Django",
                "PostgreSQL",
                "Docker",
                "AI Integration",
                "REST APIs",
                "Full-Stack Development",
                "SaaS Development",
              ],
              offers: {
                "@type": "Offer",
                description:
                  "Freelance full-stack development, AI integration, web application development.",
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
