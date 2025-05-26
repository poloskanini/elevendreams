"use client";

import Image from "next/image";
import styles from "./banner.module.scss";
import { Open_Sans } from "next/font/google";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Paragraph = ({ children, delay = 0 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, delay }}
      className="sm:text-lg text-base text-white-200 leading-7 text-justify mb-6"
    >
      {children}
    </motion.p>
  );
};

const AnimatedHeading = ({ children }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.h3
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
      className="sm:text-3xl text-2xl font-black text-yellow-600 mt-5 mb-3 text-center"
    >
      {children}
    </motion.h3>
  );
};

export default function Banner() {
  return (
    <div className="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-neutral-900 before:opacity-60 before:z-10" id="about" aria-label="À propos">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/banner-video-sm2.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>

      <div className={openSans.className}>
  <div className="min-h-[950px] relative z-10 h-full max-w-6xl mx-auto flex flex-col justify-center text-white p-10">
    <AnimatedHeading>BIOGRAPHY</AnimatedHeading>

    <div className="innerBiography p-5 leading-8 space-y-10">
      <Paragraph>
        <span className={`${styles.bandName} font-black`}>Eleven Dreams</span> incarne un Rock-Pop intense et authentique, où les sonorités acoustiques, électriques et symphoniques s&apos;entremêlent pour offrir une musique d&apos;énergie et d&apos;émotions.
      </Paragraph>

      <Paragraph delay={0.3}>
        Récompensé par la nomination de &quot;Grand Lauréat	&quot; lors du Tremplin Fallenfest (Saison 6), <span className={`${styles.bandName} font-black`}>Eleven Dreams</span> s&apos;est alors fait remarquer avec son 1er E.P &quot;Going On&quot; enregistré aux légendaires <i>Capitol Studios</i> et salué par la critique parisienne. Aujourd&apos;hui, ils se consacrent pleinement à la création de leur 1er album, une étape cruciale dans leur parcours.
      </Paragraph>

      <Paragraph delay={0.6}>
        Sur scène, les quatre musiciens d&apos;<span className={`${styles.bandName} font-black`}>Eleven Dreams</span> (Nicolas BARTHÈS - Gabriel PONS - Laurent BERGEON - Arnaud LEVIOT) livrent des performances captivantes, oscillant entre intensité et envolées planantes, dans un univers qui rappelle souvent Pink Floyd, Coldplay ou encore Muse.
      </Paragraph>

      <Paragraph delay={0.9}>
        <span className={`${styles.bandName} font-black`}>Eleven Dreams</span> a déjà conquis de nombreuses scènes en Île-de-France, laissant à chaque fois une empreinte vibrante...
      </Paragraph>
    </div>
  </div>
</div>

    </div>
  );
}
