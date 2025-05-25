// components/Footer.jsx
import Link from "next/link";
import styles from "../header/header.module.scss"; // pour la police cohérente !

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Nom du site avec la même police que le header */}
        <div className={`${styles.headerTitle} text-sm font-semibold tracking-wide`}>
          © {new Date().getFullYear()} Eleven Dreams
        </div>

        {/* Liens sociaux avec icônes */}
        <div className="flex gap-6 items-center">
          <Link
            href="https://www.facebook.com/elevendreamsmusic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#6bb3cb] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </Link>

          <Link
            href="https://www.instagram.com/elevendreamsmusic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#6bb3cb] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.95.24 2.405.41.57.207.98.453 1.407.88.426.426.672.837.88 1.407.17.455.356 1.235.41 2.405.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.95-.41 2.405a3.905 3.905 0 01-.88 1.407 3.905 3.905 0 01-1.407.88c-.455.17-1.235.356-2.405.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.95-.24-2.405-.41a3.905 3.905 0 01-1.407-.88 3.905 3.905 0 01-.88-1.407c-.17-.455-.356-1.235-.41-2.405C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.95.41-2.405a3.905 3.905 0 01.88-1.407 3.905 3.905 0 011.407-.88c.455-.17 1.235-.356 2.405-.41C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.145 0-3.5.012-4.72.07-.998.05-1.54.216-1.9.36-.46.184-.787.4-1.135.748a2.505 2.505 0 00-.748 1.135c-.144.36-.31.902-.36 1.9-.058 1.22-.07 1.575-.07 4.72s.012 3.5.07 4.72c.05.998.216 1.54.36 1.9.184.46.4.787.748 1.135.348.348.675.564 1.135.748.36.144.902.31 1.9.36 1.22.058 1.575.07 4.72.07s3.5-.012 4.72-.07c.998-.05 1.54-.216 1.9-.36.46-.184.787-.4 1.135-.748.348-.348.564-.675.748-1.135.144-.36.31-.902.36-1.9.058-1.22.07-1.575.07-4.72s-.012-3.5-.07-4.72c-.05-.998-.216-1.54-.36-1.9a2.505 2.505 0 00-.748-1.135 2.505 2.505 0 00-1.135-.748c-.36-.144-.902-.31-1.9-.36-1.22-.058-1.575-.07-4.72-.07zm0 3.3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.8a3.7 3.7 0 100 7.4 3.7 3.7 0 000-7.4zm5.6-.9a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z"/>
            </svg>
          </Link>

          <Link
            href="https://www.youtube.com/@elevendreamsmusic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-[#6bb3cb] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M19.6 6.2c-.2-.7-.8-1.2-1.5-1.4-1.3-.3-6.5-.3-6.5-.3s-5.2 0-6.5.3c-.7.2-1.3.7-1.5 1.4C3 7.5 3 12 3 12s0 4.5.6 5.8c.2.7.8 1.2 1.5 1.4 1.3.3 6.5.3 6.5.3s5.2 0 6.5-.3c.7-.2 1.3-.7 1.5-1.4.6-1.3.6-5.8.6-5.8s0-4.5-.6-5.8zM10 15V9l5 3-5 3z"/>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
