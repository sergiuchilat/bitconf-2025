import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import Schedule from '@/components/Schedule';
import Registration from '@/components/Registration';
import Gallery2024 from '@/components/Gallery2024';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Registration />
      <Gallery2024 />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}
