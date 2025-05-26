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
  ];

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(" ");
    return { day, month, year };
  };

  const { day: nextDay, month: nextMonth, year: nextYear } = parseDate(shows[0].date);

  const getGoogleMapsLink = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="relative text-white py-24 px-4 lg:px-20 overflow-hidden">
      {/* Image de fond */}
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
        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-3xl text-2xl font-extrabold mb-16 text-center"
        >
          UPCOMING <span className="text-yellow-600">EVENTS</span>
        </motion.h2>

        {/* Ligne du prochain show */}
        <div className="grid grid-cols-3 gap-4 border-t border-white/20 mb-4">
          <div className="flex flex-col justify-center items-start py-3 border-b border-white/20 relative">
            <p className="text-[100px] sm:text-[160px] leading-none font-extrabold opacity-10">{nextDay}</p>
            <p className="uppercase tracking-widest text-lg font-semibold">
              {nextMonth} {nextYear}
            </p>
          </div>
          <div className="py-3 flex flex-col items-start justify-center border-b border-white/20 relative">
            {shows[0].image && (
              <Link href={shows[0].link} target="_blank">
                <Image
                  src={shows[0].image}
                  alt={`Miniature ${shows[0].location}`}
                  width={120}
                  height={80}
                  className="rounded shadow-lg mb-2"
                />
              </Link>
            )}
            <p>{shows[0].location}</p>
            
          </div>
          <div className="py-3 flex items-center border-b border-white/20">
            <Link
              href={getGoogleMapsLink(shows[0].address)}
              target="_blank"
              className="hover:underline"
            >
              {shows[0].address}
            </Link>
          </div>
        </div>

        {/* Lignes des shows suivants */}
        <div className="grid grid-cols-3 gap-4 text-sm sm:text-base uppercase font-semibold border-t border-white/20">
          {shows.slice(1).map((show, idx) => {
            const { day, month, year } = parseDate(show.date);
            return (
              <React.Fragment key={idx}>
                {/* Date */}
                <div className="py-3 border-b border-white/10 flex items-center">
                  {day} {month} {year}
                </div>

                {/* Lieu + miniature */}
                <div className="py-3 border-b border-white/10 flex flex-col gap-1">
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

                {/* Adresse cliquable */}
                <div className="py-3 border-b border-white/10 flex items-center">
                  <Link
                    href={getGoogleMapsLink(show.address)}
                    target="_blank"
                    className="hover:underline"
                  >
                    {show.address}
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
