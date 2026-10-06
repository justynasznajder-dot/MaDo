# MaDo Hair Studio — strona internetowa

Strona one-page w Next.js 16 (App Router) + Tailwind CSS 4.

## Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produkcyjny
```

## Gdzie co edytować

| Co | Plik |
|---|---|
| Dane salonu, telefon, link Booksy, godziny, cennik, opinie, galeria | `lib/salon.ts` |
| Kolory i fonty | `app/globals.css` (`@theme`) + `app/layout.tsx` |
| SEO, domena, dane strukturalne (Google) | `app/layout.tsx` |
| Sekcje strony | `components/` |
| Zdjęcia | `public/images/` |

## Przed publikacją
- Podmień `metadataBase` w `app/layout.tsx` na docelową domenę.
- Potwierdź z salonem cennik i godziny (pobrane z Booksy/Google, październik 2026).
- Potwierdź zgodę na publikację opinii i zdjęć zespołu.
- Favicon generuje się z `app/icon.png`.
