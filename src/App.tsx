import { AnnouncementBar } from "./components/AnnouncementBar";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { Marquee } from "./components/Marquee";
import { Manifesto } from "./components/Manifesto";
import { Collection } from "./components/Collection";
import { Bestsellers } from "./components/Bestsellers";
import { Editorial } from "./components/Editorial";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { useLenis } from "./lib/useLenis";

export default function App() {
  useLenis();
  return (
    <div className="relative min-h-screen text-ink">
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <Categories />
        <Marquee />
        <Manifesto />
        <Collection />
        <Bestsellers />
        <Editorial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
