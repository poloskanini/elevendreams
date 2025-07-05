"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function UpcomingShows() {
  const upcoming = [
    {
      date: "26 juillet 2025",
      location: "LE TRUSKEL",
      address: "12 Rue Feydeau, 75002 Paris",
      image: "/images/495513797_1210458367757115_8022579537367684268_n.jpg",
      link: "",
    },
  ];

  const past = [
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

  const { day: nextDay, month: nextMonth, year: nextYear } = parseDate(upcoming[0].date);
  const { day: lastDay, month: lastMonth, year: lastYear } = parseDate(past[0].date);

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
        {/* Titre Upcoming */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-3xl text-2xl font-extrabold mb-16 text-center"
        >
          UPCOMING <span className="text-yellow-600">EVENTS</span>
        </motion.h2>

        {/* Show en avant */}
        <div className="grid grid-cols-3 gap-4 border-t border-white/20 mb-4">
          <div className="flex flex-col justify-center items-start py-3 border-b border-white/20 relative">
            <p className="text-[100px] sm:text-[160px] leading-none font-extrabold opacity-10">{nextDay}</p>
            <p className="uppercase tracking-widest text-lg font-semibold">
              {nextMonth} {nextYear}
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
        </div>

        {/* Section Last Shows */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-3xl text-2xl font-extrabold mt-24 mb-16 text-center"
        >
          PAST <span className="text-yellow-600">SHOWS</span>
        </motion.h2>

        <div className="grid grid-cols-3 gap-4 border-t border-white/20 mb-4">
          <div className="flex flex-col justify-center items-start py-3 border-b border-white/20 relative">
            <p className="text-[100px] sm:text-[160px] leading-none font-extrabold opacity-10">{lastDay}</p>
            <p className="uppercase tracking-widest text-lg font-semibold">
              {lastMonth} {lastYear}
            </p>
          </div>
          <div className="py-3 flex flex-col items-start justify-center border-b border-white/20 relative">
            {past[0].image && (
              <Link href={past[0].link} target="_blank">
                <Image
                  src={past[0].image}
                  alt={`Miniature ${past[0].location}`}
                  width={120}
                  height={80}
                  className="rounded shadow-lg mb-2"
                />
              </Link>
            )}
            <p>{past[0].location}</p>
          </div>
          <div className="py-3 flex items-center border-b border-white/20">
            <Link
              href={getGoogleMapsLink(past[0].address)}
              target="_blank"
              className="hover:underline"
            >
              {past[0].address}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
