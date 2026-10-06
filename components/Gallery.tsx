"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery, salon } from "@/lib/salon";
import { Eyebrow } from "./Sections";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step]);

  return (
    <section id="galeria" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Galeria</Eyebrow>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Zajrzyj do salonu</h2>
          </div>
          <a href={salon.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-sage-700 underline underline-offset-4">
            Więcej na Facebooku
          </a>
        </div>

        <div className="mt-10 columns-2 gap-3 sm:gap-4 lg:columns-3">
          {gallery.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              className="group mb-3 block w-full overflow-hidden rounded-2xl sm:mb-4"
              aria-label={`Powiększ zdjęcie: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(min-width:1024px) 360px, 50vw"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          onClick={close}
        >
          <div className="relative h-full max-h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={gallery[index].src} alt={gallery[index].alt} fill sizes="100vw" className="object-contain" />
          </div>
          <button onClick={close} className="absolute right-4 top-4 h-12 w-12 rounded-full bg-white/10 text-2xl text-white" aria-label="Zamknij">
            ×
          </button>
          <button onClick={(e) => { e.stopPropagation(); step(-1); }} className="absolute left-2 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl text-white sm:left-6" aria-label="Poprzednie">
            ‹
          </button>
          <button onClick={(e) => { e.stopPropagation(); step(1); }} className="absolute right-2 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-white/10 text-2xl text-white sm:right-6" aria-label="Następne">
            ›
          </button>
        </div>
      )}
    </section>
  );
}
