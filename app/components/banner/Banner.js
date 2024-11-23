import Image from "next/image"
import styles from "./banner.module.scss"
import { Open_Sans } from 'next/font/google'
import Slider from "../slider/Slider.jsx";

const openSans = Open_Sans({
  subsets: ["latin"], // Charge uniquement les sous-ensembles nécessaires
  weight: ["400", "700"], // Poids que vous utilisez
  display: "swap", // Amélioration des performances
});

export default function Banner() {
  return (
    <>
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-neutral-900 before:opacity-60 before:z-10">
      <Image src="/images/cigalefinal.png" fill style alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className={openSans.className}>

        <div className="min-h-[950px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-end text-white p-10">
          <h3 className="sm:text-3xl text-2xl font-black text-yellow-600 mt-5 mb-3 text-center">BIOGRAPHIE</h3>
          {/* <h4 className="font-thin text-center">
            L&apos;histoire d&apos;<span className={`${styles.bandName} font-black`}>Eleven Dreams</span>
          </h4> */}

          <br/>

          <div className="innerBiography p-5 leading-8">

            <p className="sm:text-lg text-base text-white-200 leading-7 text-justify "><span className={`${styles.bandName} font-black`}>Eleven Dreams</span> incarne un Rock-Pop intense et authentique, où les sonorités acoustiques, électriques et symphoniques s&apos;entremêlent pour offrir une musique d&apos;énergie et d&apos;émotions.</p>

            <br/>
            
            <p className="sm:text-lg text-base text-justify text-white-200 leading-7">Récompensé par la nomination de &quot;Grand Lauréat&quot; lors du Tremplin Fallenfest (Saison 6), <span className={`${styles.bandName} font-black`}>Eleven Dreams</span> &nbsp;s&apos;est alors fait remarquer avec son 1er E.P &quot;Going On&quot; enregistré aux légendaires <i>Capitol Studios</i> et salué par la critique parisienne. Aujourd&apos;hui, ils se consacrent pleinement à la création de leur 1er album, une étape cruciale dans leur parcours.</p>
            
            <br/>
            
            <p className="sm:text-lg text-base text-justify text-white-200 leading-7">
            Sur scène, les quatre musiciens d&apos;<span className={`${styles.bandName} font-black`}>Eleven Dreams</span>&nbsp; (Nicolas BARTHÈS - Gabriel PONS - Laurent BERGEON - Arnaud LEVIOT) livrent des performances captivantes, oscillant entre intensité et envolées planantes, dans un univers qui rappelle souvent Pink Floyd, Coldplay ou encore Muse.</p>

            <br/>
            
            <p className="sm:text-lg text-base text-justify text-white-200 leading-7"><span className={`${styles.bandName} font-black`}>Eleven Dreams</span>&nbsp; a déjà conquis de nombreuses scènes en Île-de-France, laissant à chaque fois une empreinte vibrante...</p>

          </div>
          
        </div>

      </div>
    </div>

  </>
  )
}