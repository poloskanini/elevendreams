import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/Header.js";

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
  title: "Eleven Dreams",
  description: "Eleven Dreams, c’est un Rock-Pop, à la fois brut et subtil, où les sonorités acoustiques électriques et symphoniques s’entremêlent pour distiller une musique d’énergie et d’émotions.",
  openGraph: {
    title: "Eleven Dreams",
    description: "Eleven Dreams, c’est un Rock-Pop, à la fois brut et subtil, où les sonorités acoustiques électriques et symphoniques s’entremêlent pour distiller une musique d’énergie et d’émotions.",
    url: "https://www.elevendreams.fr",
    images: [
      {
        url: "/images/albumcover.webp",
        width: 1200,
        height: 630,
        alt: "Eleven Dreams Album Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleven Dreams Album Cover",
    description: "Eleven Dreams, c’est un Rock-Pop, à la fois brut et subtil, où les sonorités acoustiques électriques et symphoniques s’entremêlent pour distiller une musique d’énergie et d’émotions.",
    images: ["/images/albumcover.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        <Header
        headerTitle={"Eleven Dreams"}
      />
      </body>
    </html>
  );
}
