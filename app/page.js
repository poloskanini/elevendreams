import FlipNavWrapper from "./components/flipNav/FlipNav";
import Hero from './components/hero/Hero.js';
import Banner from './components/banner/Banner.js';
import Carousel from './components/carousel/Carousel.js';
import Slider from './components/slider/Slider.jsx'
import FuzzyOverlayExample from "./components/fuzzyoverlay/fuzzyOverlay";

export default function Home() {
  return (
    <>

      <FlipNavWrapper headerTitle={"Eleven Dreams"}>

      </FlipNavWrapper>
      
      <Hero
        title={"Eleven Dreams"}
      />
      <Banner />
      <Slider></Slider>
      <Carousel />
      <FuzzyOverlayExample/>
    </>
  );
}
