"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EASE = [0.25, 0.1, 0.25, 1.0] as const;

interface ImageSliderProps {
  images: string[];
  alt: string;
}

export default function ImageSlider({ images, alt }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
    },
    [images.length]
  );

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 120 : -120, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -120 : 120, opacity: 0 }),
  };

  if (images.length === 0) {
    return (
      <div className="flex aspect-[16/10] items-center justify-center bg-bg-secondary">
        <span className="font-mono text-xs text-text-secondary/40">
          No images
        </span>
      </div>
    );
  }

  return (
    <div className="group relative aspect-[16/10] overflow-hidden bg-bg-secondary">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${alt} — ${current + 1}/${images.length}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
            priority={current === 0}
            unoptimized
          />
        </motion.div>
      </AnimatePresence>

      {/* Counter badge */}
      <div className="absolute top-3 right-3 z-10 bg-bg-primary/70 px-2 py-1 backdrop-blur-sm">
        <span className="font-mono text-xs text-text-primary">
          {current + 1} / {images.length}
        </span>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-bg-primary/70 text-text-primary opacity-0 backdrop-blur-sm transition-opacity hover:bg-bg-primary group-hover:opacity-100"
            aria-label="Previous image"
          >
            ←
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-bg-primary/70 text-text-primary opacity-0 backdrop-blur-sm transition-opacity hover:bg-bg-primary group-hover:opacity-100"
            aria-label="Next image"
          >
            →
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 transition-all ${
                i === current
                  ? "w-4 rounded-full bg-text-primary"
                  : "w-1.5 rounded-full bg-text-primary/40"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
