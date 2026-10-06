import Header from "@/components/Header";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import { About, BookingBanner, Contact, Footer, Hero, MobileBookingBar, Reviews, Team } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Reviews />
        <BookingBanner />
        <Contact />
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  );
}
