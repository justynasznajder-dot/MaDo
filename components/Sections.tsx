import Image from "next/image";
import { hours, reviews, salon, team } from "@/lib/salon";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-sage-700">
      <span className="h-px w-8 bg-oak" aria-hidden />
      {children}
    </p>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 fill-oak" aria-hidden>
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[78%] bg-gradient-to-b from-sage-50 to-cream"
        aria-hidden
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:pb-24">
        <div>
          <Eyebrow>{salon.tagline}</Eyebrow>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Włosy, w których czujesz się <em className="text-sage-700">sobą</em>.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Strzyżenie, koloryzacja i pielęgnacja w jasnym, spokojnym wnętrzu przy ul. Bednorza.
            Do każdej osoby podchodzimy indywidualnie.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={salon.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sage-700 px-7 py-4 text-center font-medium text-white shadow-lg shadow-sage-700/20 transition hover:bg-sage-900"
            >
              Umów wizytę online
            </a>
            <a href="#uslugi" className="rounded-full border border-ink/15 bg-white/60 px-7 py-4 text-center font-medium transition hover:border-sage-700 hover:text-sage-700">
              Zobacz cennik
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-2">
              <span className="flex">{[...Array(5)].map((_, i) => <Star key={i} />)}</span>
              <strong className="text-ink">{salon.rating.booksy.value}</strong> · {salon.rating.booksy.count} opinii na Booksy
            </span>
            <span>Pn–Pt 9–19 · Sob 8–14</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/wnetrze-1.jpg"
              alt="Wnętrze salonu MaDo Hair Studio — stanowiska z okrągłymi lustrami i szałwiowe szafki"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-cream shadow-xl sm:block lg:-left-10 lg:w-48">
            <Image src="/images/recepcja.jpg" alt="Recepcja z logo MaDo" width={400} height={300} className="aspect-[4/3] object-cover" />
          </div>
          <div className="absolute -top-4 right-4 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl sm:h-28 sm:w-28">
            <Image src="/images/logo.png" alt="" width={112} height={112} className="h-20 w-20 sm:h-24 sm:w-24" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const features = [
    { title: "Indywidualne podejście", text: "Zaczynamy od rozmowy — dobieramy cięcie i kolor do Ciebie, nie do trendu." },
    { title: "Bezpieczna koloryzacja", text: "Olaplex przy rozjaśnianiu i dekoloryzacji chroni strukturę włosa." },
    { title: "Dla całej rodziny", text: "Strzyżemy panie, panów i dzieci. Salon jest przyjazny dzieciom." },
  ];
  return (
    <section id="o-nas" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src="/images/praca-1.jpg" alt="Fryzjerka MaDo przy pracy" fill sizes="(min-width:1024px) 260px, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-3xl">
              <Image src="/images/myjnia.jpg" alt="Myjnia w salonie" fill sizes="(min-width:1024px) 260px, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow>O nas</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Jasne wnętrze, spokojna atmosfera i fryzjerzy, którzy słuchają.
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            MaDo Hair Studio to salon Magdaleny Petyni w centrum Pszczyny. Gwarantujemy wysokie
            standardy strzyżenia, koloryzacji i stylizacji, podążając za najnowszymi trendami —
            ale zawsze z myślą o tym, jak będziesz się czuć z nową fryzurą na co dzień.
          </p>
          <ul className="mt-10 space-y-6">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-sage-500" aria-hidden />
                <div>
                  <h3 className="font-medium">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="bg-linen py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl">
          <Image src="/images/zespol.jpg" alt="Zespół MaDo Hair Studio" fill sizes="(min-width:1024px) 620px, 100vw" className="object-cover" />
        </div>
        <div>
          <Eyebrow>Zespół</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Poznaj nas</h2>
          <p className="mt-6 leading-relaxed text-muted">
            Tworzymy zgrany zespół, który dzieli pasję do pięknych, zdrowych włosów. Przy rezerwacji
            online możesz wybrać swoją fryzjerkę.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {team.map((name) => (
              <li key={name} className="rounded-full border border-sage-300 bg-white px-5 py-2 font-display text-xl">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="opinie" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Opinie</Eyebrow>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Co mówią klienci</h2>
          </div>
          <div className="flex gap-8">
            <div>
              <p className="font-display text-4xl font-semibold">{salon.rating.booksy.value}</p>
              <p className="text-sm text-muted">{salon.rating.booksy.count} opinii · Booksy</p>
            </div>
            <div>
              <p className="font-display text-4xl font-semibold">{salon.rating.google.value}</p>
              <p className="text-sm text-muted">{salon.rating.google.count} opinii · Google</p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.author} className="flex flex-col rounded-3xl border border-sage-100 bg-white p-7">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
              <blockquote className="mt-4 flex-1 leading-relaxed">„{r.text}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-medium">{r.author}</span>
                <span className="text-muted"> · {r.service}</span>
              </figcaption>
            </figure>
          ))}
          <div className="flex flex-col justify-center rounded-3xl bg-sage-700 p-7 text-white">
            <p className="font-display text-6xl font-semibold">{salon.rating.booksy.value}</p>
            <div className="mt-2 flex">{[...Array(5)].map((_, i) => <Star key={i} />)}</div>
            <p className="mt-4 leading-relaxed text-white/80">
              Średnia z {salon.rating.booksy.count} zweryfikowanych opinii klientów na Booksy.
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          <a href={salon.bookingUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-oak underline-offset-4 hover:text-sage-700">
            Zobacz wszystkie opinie na Booksy
          </a>
        </p>
      </div>
    </section>
  );
}

export function BookingBanner() {
  return (
    <section className="px-4 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-sage-700 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <Image src="/images/wnetrze-4.jpg" alt="" fill sizes="100vw" className="object-cover opacity-15" />
        <div className="relative">
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Zarezerwuj termin w kilka sekund</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/80">
            Wybierz usługę, fryzjerkę i godzinę, która Ci pasuje — rezerwacja online przez Booksy, 24/7.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={salon.bookingUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-7 py-4 font-medium text-sage-900 transition hover:bg-cream">
              Umów wizytę online
            </a>
            <a href={salon.phoneHref} className="rounded-full border border-white/40 px-7 py-4 font-medium transition hover:bg-white/10">
              {salon.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <Eyebrow>Kontakt</Eyebrow>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">Zapraszamy</h2>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">Adres</dt>
              <dd className="mt-1 text-lg">
                {salon.address.street}, {salon.address.postalCode} {salon.address.city}
                <br />
                <a href={salon.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-sage-700 underline underline-offset-4">
                  Wyznacz trasę
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">Telefon</dt>
              <dd className="mt-1 text-lg">
                <a href={salon.phoneHref} className="hover:text-sage-700">{salon.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">Godziny otwarcia</dt>
              <dd className="mt-2">
                <table className="w-full max-w-xs text-sm">
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} className="border-b border-sage-100 last:border-0">
                        <td className="py-2">{h.day}</td>
                        <td className={`py-2 text-right tabular-nums ${h.time === "nieczynne" ? "text-muted" : ""}`}>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted">Udogodnienia</dt>
              <dd className="mt-1 text-sm text-muted">Parking · płatność kartą · dostęp dla osób z niepełnosprawnościami · Wi-Fi</dd>
            </div>
          </dl>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-3xl border border-sage-100 bg-sage-50">
            <iframe
              title="Mapa dojazdu do MaDo Hair Studio"
              src={salon.mapsEmbed}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="relative aspect-[16/7] overflow-hidden rounded-3xl">
            <Image src="/images/budynek.jpg" alt="Budynek salonu MaDo przy ul. Bednorza 2D" fill sizes="(min-width:1024px) 640px, 100vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-sage-100 bg-linen pb-28 pt-12 lg:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="" width={40} height={40} />
          <span>© {new Date().getFullYear()} {salon.name} {salon.owner}</span>
        </div>
        <div className="flex gap-6">
          <a href={salon.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-sage-700">Facebook</a>
          <a href={salon.bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sage-700">Booksy</a>
        </div>
      </div>
    </footer>
  );
}

export function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sage-100 bg-cream/95 p-3 backdrop-blur lg:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
      <div className="flex gap-3">
        <a href={salon.phoneHref} className="flex flex-1 items-center justify-center rounded-full border border-ink/15 py-3 text-sm font-medium" aria-label={`Zadzwoń ${salon.phone}`}>
          Zadzwoń
        </a>
        <a href={salon.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex flex-[2] items-center justify-center rounded-full bg-sage-700 py-3 text-sm font-medium text-white">
          Umów wizytę online
        </a>
      </div>
    </div>
  );
}
