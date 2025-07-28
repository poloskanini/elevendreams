"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function UpcomingShows() {
  const upcoming = []; // Aucun événement à venir

  const past = [
    {
      date: "26 juillet 2025",
      location: "LE TRUSKEL",
      address: "12 Rue Feydeau, 75002 Paris",
      image: "/images/495513797_1210458367757115_8022579537367684268_n.jpg",
      link: "https://fb.me/e/5HOD2uT4g",
    },
    {
      date: "21 juin 2025",
      location: "ÉTIOLLES MONTE LE SON - 21H",
      address: "Maison des Arts Martiaux (plein air), 91450 ÉTIOLLES",
      image: "/images/Concert-Etiolles-Insta-2.png",
      link: "https://fb.me/e/5MQJDnl0G",
    },
  ];

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(" ");
    return { day, month, year };
  };

  const getGoogleMapsLink = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="relative text-white py-24 px-4 lg:px-20 overflow-hidden scroll-mt-48" id="shows">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <Image
          src="/images/465214818_10160220812330064_2400460848743978096_n.jpg"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Titre UPCOMING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-3xl text-2xl font-extrabold mb-16 text-center"
        >
          UPCOMING <span className="text-yellow-600">EVENTS</span>
        </motion.h2>

        {/* Contenu Upcoming */}
        {upcoming.length > 0 ? (
          <div className="grid grid-cols-3 gap-4 border-t border-white/20 mb-4">
            {(() => {
              const { day, month, year } = parseDate(upcoming[0].date);
              return (
                <>
                  <div className="flex flex-col justify-center items-start py-3 border-b border-white/20 relative">
                    <p className="text-[100px] sm:text-[160px] leading-none font-extrabold opacity-10">{day}</p>
                    <p className="uppercase tracking-widest text-lg font-semibold">
                      {month} {year}
                    </p>
                  </div>
                  <div className="py-3 flex flex-col items-start justify-center border-b border-white/20 relative">
                    {upcoming[0].image && (
                      <Link href={upcoming[0].link || "#"} target="_blank">
                        <Image
                          src={upcoming[0].image}
                          alt={`Miniature ${upcoming[0].location}`}
                          width={120}
                          height={80}
                          className="rounded shadow-lg mb-2"
                        />
                      </Link>
                    )}
                    <p>{upcoming[0].location}</p>
                  </div>
                  <div className="py-3 flex items-center border-b border-white/20">
                    <Link
                      href={getGoogleMapsLink(upcoming[0].address)}
                      target="_blank"
                      className="hover:underline"
                    >
                      {upcoming[0].address}
                    </Link>
                  </div>
                </>
              );
            })()}
          </div>
        ) : (
          <p className="text-center text-gray-300 italic">Aucun événement à venir pour le moment.</p>
        )}

        {/* PAST SHOWS */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-3xl text-2xl font-extrabold mt-24 mb-16 text-center"
        >
          PAST <span className="text-yellow-600">SHOWS</span>
        </motion.h2>

        {past.map((show, index) => {
          const { day, month, year } = parseDate(show.date);
          return (
            <div key={index} className="grid grid-cols-3 gap-4 border-t border-white/20 mb-4">
              <div className="flex flex-col justify-center items-start py-3 border-b border-white/20 relative">
                <p className="text-[100px] sm:text-[160px] leading-none font-extrabold opacity-10">{day}</p>
                <p className="uppercase tracking-widest text-lg font-semibold">
                  {month} {year}
                </p>
              </div>
              <div className="py-3 flex flex-col items-start justify-center border-b border-white/20 relative">
                {show.image && (
                  <Link href={show.link || "#"} target="_blank">
                    <Image
                      src={show.image}
                      alt={`Miniature ${show.location}`}
                      width={120}
                      height={80}
                      className="rounded shadow-lg mb-2"
                    />
                  </Link>
                )}
                <p>{show.location}</p>
              </div>
              <div className="py-3 flex items-center border-b border-white/20">
                <Link
                  href={getGoogleMapsLink(show.address)}
                  target="_blank"
                  className="hover:underline"
                >
                  {show.address}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
