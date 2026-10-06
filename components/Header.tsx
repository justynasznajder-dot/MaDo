"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { salon } from "@/lib/salon";

const links = [
  { href: "#o-nas", label: "O nas" },
  { href: "#uslugi", label: "Usługi i cennik" },
  { href: "#galeria", label: "Galeria" },
  { href: "#opinie", label: "Opinie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-cream/95 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image src="/images/logo.png" alt="MaDo Hair Studio — logo" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12" priority />
          <span className="font-display text-xl font-semibold tracking-wide sm:text-2xl">MaDo Hair Studio</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Główna nawigacja">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted transition hover:text-sage-700">
              {l.label}
            </a>
          ))}
          <a
            href={salon.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-sage-700 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sage-900"
          >
            Umów wizytę
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="h-[calc(100dvh-4rem)] border-t border-sage-100 bg-cream px-6 pb-10 pt-6 lg:hidden" aria-label="Menu mobilne">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-display text-3xl">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a href={salon.bookingUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-sage-700 px-6 py-4 text-center font-medium text-white">
              Umów wizytę online
            </a>
            <a href={salon.phoneHref} className="rounded-full border border-ink/15 px-6 py-4 text-center font-medium">
              Zadzwoń: {salon.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
