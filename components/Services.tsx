"use client";

import { useState } from "react";
import { salon, services } from "@/lib/salon";
import { Eyebrow } from "./Sections";

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const group = services.find((g) => g.id === active)!;

  return (
    <section id="uslugi" className="bg-sage-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Eyebrow>Usługi i cennik</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Co możemy dla Ciebie zrobić</h2>
          <p className="mt-4 text-muted">
            Ceny orientacyjne — ostateczna cena zależy od długości i gęstości włosów oraz ilości produktu.
          </p>
        </div>

        <div className="-mx-4 mt-10 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="tablist" aria-label="Kategorie usług">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {services.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={active === g.id}
                aria-controls={`panel-${g.id}`}
                onClick={() => setActive(g.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  active === g.id ? "bg-sage-700 text-white" : "bg-white text-ink hover:bg-sage-100"
                }`}
              >
                {g.title}
              </button>
            ))}
          </div>
        </div>

        <div id={`panel-${group.id}`} role="tabpanel" className="mt-8 rounded-3xl bg-white p-6 sm:p-10">
          <p className="mb-6 text-muted">{group.intro}</p>
          <ul className="grid gap-x-12 md:grid-cols-2">
            {group.items.map((s) => (
              <li key={s.name} className="flex items-baseline gap-3 border-b border-sage-100 py-4">
                <span className="flex-1">{s.name}</span>
                <span className="shrink-0 font-medium tabular-nums text-sage-700">{s.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-muted">Pełna lista usług i czas trwania — na Booksy.</p>
            <a
              href={salon.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sage-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-sage-900"
            >
              Zarezerwuj usługę
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
