"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function UpcomingShows() {
  const shows = [
    {
      date: "21 juin 2025",
      location: "ÉTIOLLES MONTE LE SON - 21H",
      address: "15 RUE ALPHONE DAUDET, 91450 ÉTIOLLES",
      image: "/images/Concert-Etiolles-Insta-2.png",
      link: "https://fb.me/e/5MQJDnl0G",
    },
    {
      date: "26 juillet 2025",
      location: "LE TRUSKEL",
      address: "12 Rue Feydeau, 75002 Paris",
      image: "/images/495513797_1210458367757115_8022579537367684268_n.jpg",
      link: "",
    },
    // Ajoute d'autres shows si besoin !
  ];

  return (
    <section className="relative text-white py-24 px-4 lg:px-20 overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/images/117131235_10224109754990528_2810594925719314284_n.jpg"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titre animé */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-3xl text-2xl font-extrabold mb-16 text-center"
        >
          UPCOMING <span className="text-yellow-600">EVENTS</span>
        </motion.h2>

        {/* Tableau */}
        <div className="grid grid-cols-3 gap-4 text-sm sm:text-base uppercase font-semibold border-t border-white/20">
          {/* En-têtes */}
          <div className="py-3 border-b border-white/20">Date</div>
          <div className="py-3 border-b border-white/20">Lieu</div>
          <div className="py-3 border-b border-white/20">Adresse</div>

          {shows.map((show, idx) => (
            <React.Fragment key={idx}>
              {/* Colonne Date avec si 21 juin, un fond spécial */}
              <div className="relative py-3 border-b border-white/10">
                {show.date.startsWith("21 juin") && (
                  <p className="absolute -top-2 -left-2 text-[100px] sm:text-[160px] leading-none font-extrabold opacity-10">
                    21
                  </p>
                )}
                {show.date}
              </div>

              {/* Colonne Lieu + miniature cliquable si lien */}
              <div className="py-3 border-b border-white/10 flex flex-col gap-1 relative">
                <p>{show.location}</p>
                {show.image && (
                  show.link ? (
                    <Link href={show.link} target="_blank">
                      <Image
                        src={show.image}
                        alt={`Miniature ${show.location}`}
                        width={120}
                        height={80}
                        className="rounded shadow-lg hover:opacity-80 transition duration-300"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={show.image}
                      alt={`Miniature ${show.location}`}
                      width={120}
                      height={80}
                      className="rounded shadow-lg"
                    />
                  )
                )}
              </div>

              {/* Colonne Adresse */}
              <div className="py-3 border-b border-white/10">{show.address}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
