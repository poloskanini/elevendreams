"use client";
import { motion } from "framer-motion";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function UpcomingShows() {
  // --- Données (avec intervalles) ---
  const upcoming = [
    // 2026
    {
      start: "13 juin 2026",
      location: "LE PLAN - Concert d'ELEVEN DREAMS",
      address: "1 avenue Louis Aragon, 91130 Ris-Orangis",
      image: "/images/AFFICHE-emc-2024.jpg",
      link: "https://leplan.com/home/",
    },
    {
      start: "18 mai 2026",
      location: "LE PLAN - Résidence scénique",
      address: "1 avenue Louis Aragon, 91130 Ris-Orangis",
      image: "/images/leplanwhite.jpg",
      link: "https://leplan.com/home/",
    },
    {
      start: "18 avril 2026",
      location: "Concert Privé (Mariage L & D)",
      address: "Domaine de Morigny-Champigny",
      image: "/images/concert-prive-mariage-2026.jpg",
      link: "",
    },
    {
      start: "18 mars 2026",
      location: "EMC-Studio La Fonderie (Enregistrement E.P)",
      address: "10 Rue Eugène Varlin, 92240 Malakoff",
      image: "/images/emc.png",
      link: "https://www.emc.fr/",
    },
    {
      start: "25 février 2026",
      location: "EMC-Studio La Fonderie (Enregistrement E.P)",
      address: "10 Rue Eugène Varlin, 92240 Malakoff",
      image: "/images/emc.png",
      link: "https://www.emc.fr/",
    },
    {
      start: "9 février 2026",
      location: "LE PLAN - Résidence scénique",
      address: "1 avenue Louis Aragon, 91130 Ris-Orangis",
      image: "/images/leplanwhite.jpg",
      link: "https://leplan.com/home/",
    },
    {
      start: "2 février 2026",
      end: "5 février 2026",
      location: "EMC-Studio La Fonderie (Enregistrement E.P)",
      address: "10 Rue Eugène Varlin, 92240 Malakoff",
      image: "/images/emc.png",
      link: "https://www.emc.fr/",
    },
    {
      start: "12 janvier 2026",
      end: "15 janvier 2026",
      location: "EMC-Studio La Fonderie (Enregistrement E.P)",
      address: "10 Rue Eugène Varlin, 92240 Malakoff",
      image: "/images/emc.png",
      link: "https://www.emc.fr/",
    },
    // 2025
    {
      start: "1 décembre 2025",
      location: "EMC-Studio La Fonderie (Enregistrement E.P)",
      address: "10 Rue Eugène Varlin, 92240 Malakoff",
      image: "/images/emc.png",
      link: "https://www.emc.fr/",
    },
    {
      start: "20 octobre 2025",
      location: "LE PLAN - Résidence scénique",
      address: "1 avenue Louis Aragon, 91130 Ris-Orangis",
      image: "/images/leplanwhite.jpg",
      link: "https://leplan.com/home/",
    },
  ];

  const pastSeed = [
    {
      start: "26 juillet 2025",
      location: "LE TRUSKEL",
      address: "12 Rue Feydeau, 75002 Paris",
      image: "/images/495513797_1210458367757115_8022579537367684268_n.jpg",
      link: "https://fb.me/e/5HOD2uT4g",
    },
    {
      start: "21 juin 2025",
      location: "ÉTIOLLES MONTE LE SON - 21H",
      address: "Maison des Arts Martiaux (plein air), 91450 ÉTIOLLES",
      image: "/images/Concert-Etiolles-Insta-2.png",
      link: "https://fb.me/e/5MQJDnl0G",
    },
  ];

  // ---- Utils dates (FR) ----
  const FR_MONTHS = {
    janvier: 0, février: 1, fevrier: 1, mars: 2, avril: 3, mai: 4, juin: 5,
    juillet: 6, août: 7, aout: 7, septembre: 8, octobre: 9, novembre: 10,
    décembre: 11, decembre: 11,
  };

  const parseFrenchDate = (dateStr) => {
    // "12 janvier 2026"
    const parts = dateStr.trim().split(/\s+/);
    if (parts.length < 3) return null;
    const day = parseInt(parts[0], 10);
    const monthName = parts[1].toLowerCase();
    const year = parseInt(parts[2], 10);
    const month = FR_MONTHS[monthName];
    if (Number.isNaN(day) || Number.isNaN(year) || month === undefined) return null;
    return new Date(year, month, day);
  };

  const getGoogleMapsLink = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // Affichage "gros chiffre" + ligne du dessous pour un intervalle
  const formatDayLine = (dStart, dEnd) => {
    if (!dEnd || dEnd.getTime() === dStart.getTime()) return String(dStart.getDate());
    // même mois+année -> "12–15"
    if (dStart.getMonth() === dEnd.getMonth() && dStart.getFullYear() === dEnd.getFullYear()) {
      return `${dStart.getDate()}–${dEnd.getDate()}`;
    }
    // mois/année différents -> "12…15"
    return `${dStart.getDate()}…${dEnd.getDate()}`;
  };
  const formatMonthYearLine = (dStart, dEnd, labelStart) => {
    const monthLabel = labelStart ?? ""; // pour garder l'orthographe d'origine si souhaité
    if (!dEnd || dEnd.getTime() === dStart.getTime()) {
      return `${monthLabel} ${dStart.getFullYear()}`;
    }
    // même mois+année
    if (dStart.getMonth() === dEnd.getMonth() && dStart.getFullYear() === dEnd.getFullYear()) {
      return `${monthLabel} ${dStart.getFullYear()}`;
    }
    // différents
    const monthNames = Object.keys(FR_MONTHS);
    const rev = Object.fromEntries(Object.entries(FR_MONTHS).map(([k, v]) => [v, k]));
    const startMonth = rev[dStart.getMonth()];
    const endMonth = rev[dEnd.getMonth()];
    const startLabel = capitalize(startMonth);
    const endLabel = capitalize(endMonth);
    return `${startLabel} ${dStart.getFullYear()} → ${endLabel} ${dEnd.getFullYear()}`;
  };
  const capitalize = (s) => (s ? s[0].toUpperCase() + s.slice(1) : s);

  // ---- Préparation (partition + tri) ----
  const { upcomingFinal, pastFinal } = useMemo(() => {
    const today = new Date();
    const todayAtMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    // Normalise chaque show avec dStart / dEnd
    const normalize = (s) => {
      const dStart = parseFrenchDate(s.start);
      const dEnd = s.end ? parseFrenchDate(s.end) : dStart;
      return { ...s, _dStart: dStart, _dEnd: dEnd };
    };

    const up = upcoming.map(normalize).filter((s) => s._dStart instanceof Date);
    // tri "du plus loin au plus proche" (date la plus grande en premier, comme demandé : déc > oct)
    up.sort((a, b) => a._dStart - b._dStart);

    const newlyPast = [];
    const stillUpcoming = [];
    for (const s of up) {
      // bascule en past quand la FIN est strictement avant aujourd’hui
      if (s._dEnd < todayAtMidnight) newlyPast.push(s);
      else stillUpcoming.push(s);
    }

    const newlyPastSortedDesc = newlyPast.sort((a, b) => b._dEnd - a._dEnd);
    const pastN = pastSeed.map(normalize).filter((s) => s._dStart instanceof Date);
    pastN.sort((a, b) => b._dEnd - a._dEnd);

    return {
      upcomingFinal: stillUpcoming,
      pastFinal: [...newlyPastSortedDesc, ...pastN],
    };
  }, [upcoming, pastSeed]);

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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* UPCOMING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-3xl text-2xl font-extrabold mb-16 text-center"
        >
          ÉVÈNEMENTS <span className="text-yellow-600">À VENIR</span>
        </motion.h2>

        {upcomingFinal.length > 0 ? (
          upcomingFinal.map((show, index) => {
            const dStart = show._dStart;
            const dEnd = show._dEnd;
            const dayLine = formatDayLine(dStart, dEnd);
            const monthLabel = show.start.split(" ")[1]; // conserve le mois écrit dans "start"
            const monthYearLine = formatMonthYearLine(dStart, dEnd, monthLabel);
            return (
              <div key={`up-${index}`} className="grid grid-cols-3 gap-4 border-t border-white/20 mb-4">
                <div className="flex flex-col justify-center items-start py-3 relative">
                  <p className="text-[80px] sm:text-[140px] leading-none font-extrabold opacity-10">{dayLine}</p>
                  <p className="uppercase tracking-widest text-lg font-semibold">{monthYearLine}</p>
                </div>
                <div className="py-3 flex flex-col items-start justify-center relative">
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
                <div className="py-3 flex items-center">
                  <Link href={getGoogleMapsLink(show.address)} target="_blank" className="hover:underline">
                    {show.address}
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-300 italic">Aucun événement à venir pour le moment.</p>
        )}

        {/* PAST */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sm:text-3xl text-2xl font-extrabold mt-24 mb-16 text-center"
        >
          ÉVÈNEMENTS <span className="text-yellow-600">PASSÉS</span>
        </motion.h2>

        {pastFinal.map((show, index) => {
          const dStart = show._dStart;
          const dEnd = show._dEnd;
          const dayLine = formatDayLine(dStart, dEnd);
          const monthLabel = show.start.split(" ")[1];
          const monthYearLine = formatMonthYearLine(dStart, dEnd, monthLabel);
          return (
            <div key={`past-${index}`} className="grid grid-cols-3 gap-4 border-t border-white/20 mb-4">
              <div className="flex flex-col justify-center items-start py-3 relative">
                <p className="text-[80px] sm:text-[140px] leading-none font-extrabold opacity-10">{dayLine}</p>
                <p className="uppercase tracking-widest text-lg font-semibold">{monthYearLine}</p>
              </div>
              <div className="py-3 flex flex-col items-start justify-center relative">
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
              <div className="py-3 flex items-center">
                <Link href={getGoogleMapsLink(show.address)} target="_blank" className="hover:underline">
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
