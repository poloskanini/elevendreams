import Image from "next/image"
import styles from "./banner.module.scss"
import { Open_Sans } from 'next/font/google';

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

        <div className="min-h-[1050px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-end text-white p-10">
          <h3 className="sm:text-3xl text-2xl font-black text-yellow-600 mt-5 mb-3 text-center">BIOGRAPHIE</h3>
          <h4 className="font-thin text-center">L&apos;histoire d&apos;Eleven Dreams</h4>

          <br/>

          <div className="innerBiography p-10 leading-8">

            <p className="sm:text-lg text-base text-white-200 leading-5 text-justify "><span className="font-black text-yellow-600">Eleven Dreams</span>, c’est un Rock-Pop, à la fois brut et subtil, où les sonorités acoustiques électriques et symphoniques s’entremêlent pour distiller une musique d’énergie et d’émotions.</p>

            <br/>
            
            <p className="sm:text-lg text-base text-justify text-white-200 leading-5">Vainqueur du Tremplin Fallenfest Saison 6, et un 1er E.P &quot;Going On&quot; enregistré à Capitol Studios chaleureusement accueilli par la critique parisienne, <span className="font-black text-yellow-600">Eleven Dreams</span> est actuellement en préparation de son 1er album.</p>
            
            <br/>
            
            <p className="sm:text-lg text-base text-justify text-white-200 leading-5">
            Les 4 musiciens continuent d&apos;arpenter les scènes en parallèle, toujours plus désireux de faire vibrer leur public avec un son généreux, percutant, et planant, aux frontières de Pink Floyd, Coldplay, ou encore Muse…</p>

            <br/>
            
            <p className="sm:text-lg text-base text-center text-white-200 leading-5"><span className="font-black text-yellow-600">Eleven Dreams</span> s’est produit dans de nombreuses salles de concert :</p>

            <br/>

            <div className="gigsList text-center text-white-200 sm:text-lg">
              <ul>
                <li>- La Cigale</li>
                <li>- Le Batofar</li>
                <li>- La Boule Noire</li>
                <li>- Le Batofar</li>
                <li>- Le Silo</li>
                <li>- La Scène Bastille</li>
                <li>- Le Petit Balcon</li>
                <li>- L&apos;OPA Bastille</li>
                <li>- La Dame de Canton</li>
              </ul>

            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  )
}