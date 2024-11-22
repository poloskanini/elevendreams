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
      <Image src="/images/cigalescene2.png" fill style alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      <div className={openSans.className}>

        <div className="min-h-[950px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-end text-white p-10 md:pb-32">
          <h3 className="sm:text-3xl text-2xl font-black text-yellow-600 mt-5 mb-3 text-center">BIOGRAPHIE</h3>
          {/* <h4 className="font-thin text-center">
            L&apos;histoire d&apos;<span className={`${styles.bandName} font-black`}>Eleven Dreams</span>
          </h4> */}

          <br/>

          <div className="innerBiography p-5 leading-8">

            <p className="sm:text-lg text-base text-white-200 leading-7 text-justify "><span className={`${styles.bandName} font-black text-yellow-600`}>Eleven Dreams</span>, c’est un Rock-Pop, à la fois brut et subtil, où les sonorités acoustiques électriques et symphoniques s’entremêlent pour distiller une musique d’énergie et d’émotions.</p>

            <br/>
            
            <p className="sm:text-lg text-base text-justify text-white-200 leading-7">Vainqueur du Tremplin Fallenfest Saison 6, et un 1er E.P &quot;Going On&quot; enregistré à Capitol Studios chaleureusement accueilli par la critique parisienne, <span className={`${styles.bandName} font-black text-yellow-600`}>Eleven Dreams</span> est actuellement en préparation de son 1er album.</p>
            
            <br/>
            
            <p className="sm:text-lg text-base text-justify text-white-200 leading-7">
            Les 4 musiciens continuent d&apos;arpenter les scènes en parallèle, toujours plus désireux de faire vibrer leur public avec un son généreux, percutant, et planant, aux frontières de Pink Floyd, Coldplay, ou encore Muse…</p>

            <br/>
            
            <p className="sm:text-lg text-base text-justify text-white-200 leading-7"><span className={`${styles.bandName} font-black text-yellow-600`}>Eleven Dreams</span> s’est produit dans de nombreuses salles de concert franciliennes...</p>

          </div>
          
        </div>

      </div>
    </div>

  </>
  )
}