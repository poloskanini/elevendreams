"use client"

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"

export default function NeuHero() {
  return (
    <section className="overflow-hidden bg-neutral-900">
      <Logos />
    </section>
  );
};

const Logos = () => {
  return (
    <div className="relative -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-transparent text-">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900 text-white">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>

      {/* Pour ajouter une deuxième ligne de logos avec des salles de concert : */}

      {/* <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div> */}

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-5 md:w-10 bg-gradient-to-r from-transparent to-white/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-5 md:w-10 bg-gradient-to-l from-transparent to-white/0" />
    </div>
  );
};

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ imgSrc, name, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-4 py-2 md:py-4 mr-28"
    >
      <Image
        src={imgSrc}
        alt={name}
        className="h-10 w-10 md:h-20 md:w-20 object-contain mr-3"
        width={100}
        height={100}
      />
      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl text-white">
        {name}
      </span>
    </a>
  );
};


const LogoItemsTop = () => (
  <>
    <LogoItem
      imgSrc="/images/Logos Salles/supersonic.png"
      name="LE SUPERSONIC"
      link="https://supersonic-club.fr/"
    />
    <LogoItem
      imgSrc="/images/Logos Salles/bateauphare2.png"
      name="LE BATEAU PHARE"
      link="https://lebateauphare.paris/"
    />
    <LogoItem
      imgSrc="/images/Logos Salles/boulenoire4.png"
      name="LA BOULE NOIRE"
      link="https://laboule-noire.fr/"
    />
    <LogoItem
      imgSrc="/images/Logos Salles/nouveaucasino2.png"
      name="LE NOUVEAU CASINO"
      link="https://nouveaucasino.fr/"
    />
    <LogoItem
      imgSrc="/images/Logos Salles/cigale5.png"
      name="LA CIGALE"
      link="https://lacigale.fr/"
    />
    <LogoItem
      imgSrc="/images/Logos Salles/damedecanton3.png"
      name="LA DAME DE CANTON"
      link="https://www.damedecanton.com/"
    />
    <LogoItem
      imgSrc="/images/Logos Salles/lesilo2.jpeg"
      name="LE SILO"
      link="https://lesilo.grandparissud.fr/"
    />
    <LogoItem
      imgSrc="/images/Logos Salles/scenebastille.jpg"
      name="LA SCÈNE BASTILLE"
      link="https://badaboum.paris/"
    />
  </>
);

// Pour ajouter une deuxième ligne de logos avec des salles de concert :

// const LogoItemsBottom = () => (
//   <>
//     <LogoItem Icon={SiBmw} name="BMW" />
//     <LogoItem Icon={SiBurton} name="Burton" />
//     <LogoItem Icon={SiBuildkite} name="Buildkite" />
//     <LogoItem Icon={SiCouchbase} name="Couchbase" />
//     <LogoItem Icon={SiDailymotion} name="Dailymotion" />
//     <LogoItem Icon={SiDeliveroo} name="deliveroo" />
//     <LogoItem Icon={SiEpicgames} name="Epic Games" />
//     <LogoItem Icon={SiGenius} name="Genius" />
//     <LogoItem Icon={SiGodaddy} name="GoDaddy" />
//     <LogoItem Icon={SiHeroku} name="Heroku" />
//   </>
// );