"use client";

import { motion } from "framer-motion";

const clips = [
  { id: "n-tkKQjeCjk", title: "Clip 1" },
  { id: "NfmV1vMTJ5I", title: "Clip 6" },
  { id: "Y8ccuvpIJYw", title: "Clip 3" },
  { id: "XOWHtNdXSow", title: "Clip 4" },
  { id: "0zXfcZKgynM", title: "Clip 5" },
  { id: "1gbR8UbnX_E", title: "Clip 2" },
];

export default function MusicSection() {
  return (
    <section id="musique" className="text-white py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="sm:text-3xl text-2xl font-black text-center text-yellow-600 mb-16">
          MUSIQUE
        </h3>

        {/* Player audio Spotify */}
        <div className="mb-20 rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://open.spotify.com/embed/album/1uSpngQgBBgwRFYS5sOdqI?utm_source=generator"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>

        {/* Clips en grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {clips.map(({id, title}) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="aspect-video rounded-xl overflow-hidden shadow-md border border-white/10"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          ))}
        </div>

        {/* Bouton écouter */}
        {/* <div className="text-center">
          <a
            href="https://open.spotify.com/artist/3xTfSvJHjs0zpIk4nIRsXe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#6bb3cb] hover:bg-[#509bac] text-black font-semibold rounded-md shadow-md transition duration-300"
          >
            Écouter l’EP
          </a>
        </div> */}
      </div>
    </section>
  );  
}
