"use client";
import Head from "next/head";

export default function JsonLdMusicGroup() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Eleven Dreams",
    "url": "https://www.elevendreams.fr",
    "sameAs": [
      "https://www.instagram.com/eleven.dreams/",
      "https://www.youtube.com/@elevendreams"
    ],
    "image": "https://www.elevendreams.fr/images/Meta-Website-image-ElevenDreams.webp"
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
