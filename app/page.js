import Hero from './components/hero/Hero.js';
import Banner from './components/banner/Banner.js';
import Carousel from './components/carousel/Carousel.js';

export default function Home() {
  return (
    <>
      <Hero
        title={"Eleven Dreams"}
      />
      <Banner />
      <Carousel />
    <div className="bg-neutral-900 h-screen"></div>
    </>
  );
}
