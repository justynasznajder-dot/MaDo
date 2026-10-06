// Wszystkie dane salonu w jednym miejscu — edytuj tutaj, a strona zaktualizuje się sama.
// Ceny i godziny pobrane z Booksy / Google (październik 2026) — do potwierdzenia z salonem.

export const salon = {
  name: "MaDo Hair Studio",
  owner: "Magdalena Petynia",
  tagline: "Salon fryzjerski w centrum Pszczyny",
  address: {
    street: "ul. Bednorza 2D",
    postalCode: "43-200",
    city: "Pszczyna",
  },
  phone: "536 148 133",
  phoneHref: "tel:+48536148133",
  bookingUrl:
    "https://booksy.com/pl-pl/99386_mado-hair-studio-magdalena-petynia_fryzjer_12643_pszczyna",
  facebook: "https://www.facebook.com/madohairstudio/",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=MaDo+Hair+Studio+Bednorza+2D+Pszczyna",
  mapsEmbed:
    "https://www.google.com/maps?q=MaDo+Hair+Studio,+Bednorza+2D,+43-200+Pszczyna&output=embed",
  geo: { lat: 49.9714647, lng: 18.9455408 },
  rating: { booksy: { value: "5.0", count: 757 }, google: { value: "4,8", count: 65 } },
};

export const hours = [
  { day: "Poniedziałek", time: "09:00 – 19:00" },
  { day: "Wtorek", time: "09:00 – 19:00" },
  { day: "Środa", time: "09:00 – 19:00" },
  { day: "Czwartek", time: "09:00 – 19:00" },
  { day: "Piątek", time: "09:00 – 19:00" },
  { day: "Sobota", time: "08:00 – 14:00" },
  { day: "Niedziela", time: "nieczynne" },
];

export type Service = { name: string; price: string; note?: string };
export type ServiceGroup = { id: string; title: string; intro: string; items: Service[] };

export const services: ServiceGroup[] = [
  {
    id: "strzyzenie",
    title: "Strzyżenie",
    intro: "Cięcie dopasowane do kształtu twarzy i stylu życia — z myciem i modelowaniem.",
    items: [
      { name: "Damskie — włosy krótkie", price: "110 zł" },
      { name: "Damskie — włosy średnie (do brody)", price: "120 zł" },
      { name: "Damskie — włosy długie", price: "od 130 zł" },
      { name: "Strzyżenie samych końcówek (bez mycia)", price: "od 80 zł" },
      { name: "Strzyżenie grzywki", price: "20 zł" },
      { name: "Męskie", price: "65 zł" },
      { name: "Męskie — samą maszynką", price: "60 zł" },
      { name: "Dziecko do 10 lat — chłopiec", price: "60 zł" },
      { name: "Dziecko do 10 lat — dziewczynka", price: "od 70 zł" },
    ],
  },
  {
    id: "koloryzacja",
    title: "Koloryzacja",
    intro: "Od jednolitego koloru po Air Touch — zawsze ze strzyżeniem i modelowaniem.",
    items: [
      { name: "Jeden kolor — włosy krótkie", price: "od 260 zł" },
      { name: "Jeden kolor — włosy średnie", price: "od 280 zł" },
      { name: "Jeden kolor — włosy długie", price: "od 300 zł" },
      { name: "Kolor + refleksy", price: "od 290 zł" },
      { name: "Pasemka, ombre, sombre + Olaplex", price: "od 340 zł" },
      { name: "Air Touch + Olaplex — włosy średnie", price: "od 550 zł" },
      { name: "Air Touch + Olaplex — włosy długie", price: "od 670 zł" },
      { name: "Dekoloryzacja + nowy kolor + Olaplex", price: "od 320 zł" },
    ],
  },
  {
    id: "pielegnacja",
    title: "Pielęgnacja",
    intro: "Zabiegi regenerujące i wygładzające dla zdrowych, lśniących włosów.",
    items: [
      { name: "Rekonstrukcja Olaplex", price: "od 100 zł" },
      { name: "Odbudowa włosa", price: "od 90 zł" },
      { name: "Botox — włosy średnie", price: "od 320 zł" },
      { name: "Botox — włosy długie", price: "od 350 zł" },
      { name: "Ultra Glow (keratynowe prostowanie)", price: "od 430 zł" },
    ],
  },
  {
    id: "stylizacja",
    title: "Stylizacja i okazje",
    intro: "Modelowanie na co dzień i fryzury na ważne chwile.",
    items: [
      { name: "Modelowanie — włosy krótkie", price: "70 zł" },
      { name: "Modelowanie — włosy średnie", price: "80 zł" },
      { name: "Modelowanie — włosy długie", price: "90 zł" },
      { name: "Pół upięcie, loki", price: "od 110 zł" },
      { name: "Kok, upięcie", price: "od 120 zł" },
      { name: "Fryzura ślubna próbna", price: "120 zł" },
      { name: "Fryzura ślubna", price: "200 zł" },
    ],
  },
];

export const team = ["Magda", "Dorota", "Klaudia"];

// Prawdziwe opinie z Booksy — przed publikacją warto potwierdzić z salonem, które wyróżnić.
export const reviews = [
  {
    text: "Bardzo polecam! Jestem bardzo zadowolona z efektu, włosy wyglądają pięknie, a sama wizyta przebiegła w miłej atmosferze.",
    author: "Adrianna",
    service: "Dekoloryzacja + nowa koloryzacja",
  },
  {
    text: "Chodzimy cała rodzina! Czy to męskie strzyżenie, dziecka, czy obcinanie włosów z farbowaniem — zawsze na 6 z plusem. Polecam!",
    author: "Patrycja",
    service: "Strzyżenie dziecka",
  },
];

export const gallery = [
  { src: "/images/wnetrze-1.jpg", alt: "Stanowiska fryzjerskie z okrągłymi lustrami", w: 1920, h: 1081 },
  { src: "/images/praca-3.jpg", alt: "Fryzjerka podczas koloryzacji klienta", w: 1920, h: 1280 },
  { src: "/images/stylizacja.jpg", alt: "Stylizacja włosów klientki", w: 1281, h: 1920 },
  { src: "/images/myjnia.jpg", alt: "Strefa myjni z szałwiowymi szafkami", w: 1920, h: 1081 },
  { src: "/images/praca-5.jpg", alt: "Modelowanie włosów szczotką", w: 1920, h: 1280 },
  { src: "/images/poczekalnia.jpg", alt: "Wygodna poczekalnia z sofą", w: 1920, h: 1081 },
  { src: "/images/praca-6.jpg", alt: "Fryzjerka z klientką w lustrze", w: 1280, h: 1920 },
  { src: "/images/recepcja.jpg", alt: "Recepcja z podświetlanym logo MaDo", w: 1920, h: 1440 },
  { src: "/images/praca-4.jpg", alt: "Fryzjerka uśmiechnięta przy pracy", w: 1920, h: 1280 },
];
