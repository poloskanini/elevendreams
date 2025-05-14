import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL("https://www.elevendreams.fr"),
  title: "Eleven Dreams",
  description: "Eleven Dreams incarne un Rock-Pop intense et authentique, où acoustique, électrique et symphonique s’entrelacent pour une musique vibrante d’énergie et d’émotions.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    site_name: "Eleven Dreams",
    title: "Eleven Dreams",
    description: "Eleven Dreams incarne un Rock-Pop intense et authentique, où acoustique, électrique et symphonique s’entrelacent pour une musique vibrante d’énergie et d’émotions.",
    url: "https://www.elevendreams.fr",
    images: [
      {
        url: "https://www.elevendreams.fr/images/Meta-Website-image-ElevenDreams.webp",
        width: 1200,
        height: 630,
        alt: "Eleven Dreams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleven Dreams",
    description: "Eleven Dreams incarne un Rock-Pop intense et authentique, où acoustique, électrique et symphonique s’entrelacent pour une musique vibrante d’énergie et d’émotions.",
    images: ["https://www.elevendreams.fr/images/Meta-Website-image-ElevenDreams.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Badge Linkaband */}
        <a href='https://linkaband.com/eleven-dreams?utm_source=badge&utm_campaign=182769' target='_blank'>
          
          <Image src='https://linkaband.com/assets/images/validation/reservation-noir.png' alt='Eleven-dreams' width={130} height={130}/></a>
        
        {/* <Header
        headerTitle={"Eleven Dreams"}
      /> */}

      {/* <FlipNavWrapper headerTitle={"Eleven Dreams"}>

      </FlipNavWrapper> */}
      </body>
    </html>
  );
}
