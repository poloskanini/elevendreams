"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import styles from './flipnav.module.scss'

const FlipNavWrapper = () => {
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/contact") {
      setShowNav(true);
      return;
    }

    const handleScroll = () => {
      setShowNav(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed top-0 left-0 w-full z-50 bg-[#083643] shadow-md ${styles.flipNavHeader}`}
        >
          <div className={`${styles.flipNavHeader}`}>
            <FlipNav />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="p-4 flex items-center justify-between relative w-full">
      <div className="flex items-center gap-6">
        <button
          className="group lg:hidden relative w-[50px] h-[50px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
            <div className="flex flex-col justify-between items-end w-[30px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  isOpen ? "rotate-[42deg]" : ""
                }`}
              ></div>
              <div
                className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                  isOpen ? "-translate-x-10" : ""
                }`}
              ></div>
              <div
                className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-[42deg]" : ""
                }`}
              ></div>
            </div>
          </div>
        </button>

        <Link href="/">
          <h1 className={`${styles.headerTitle}`}>Eleven Dreams</h1>
        </Link>

        <NavLink text="Bio" href="#about" />
        <NavLink text="Music" href="#music" />
        <NavLink text="Shows" href="#shows" />
        <NavLink text="Contact" href="/contact" />
      </div>

      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

const NavLink = ({ text, href }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = href.replace("#", "");

    if (pathname !== "/") {
      router.push("/" + href);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white">{text}</span>
        <span className="flex items-center h-[30px] text-[#6bb3cb]">{text}</span>
      </motion.div>
    </Link>
  );
};

const NavMenu = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-[#083643] shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Bio" href="#about" setIsOpen={setIsOpen} />
      <MenuLink text="Music" href="#music" setIsOpen={setIsOpen} />
      <MenuLink text="Shows" href="#shows" setIsOpen={setIsOpen} />
      <MenuLink text="Contact" href="/contact" setIsOpen={setIsOpen} />
    </motion.div>
  );
};

const MenuLink = ({ text, href, setIsOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    if (!href.startsWith("#")) {
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    const target = href.replace("#", "");

    if (pathname !== "/") {
      router.push("/" + href);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  return (
    <motion.a
      variants={menuLinkVariants}
      onClick={handleClick}
      rel="nofollow"
      href={href}
      className="h-[30px] overflow-hidden font-medium text-sm flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-white" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white">{text}</span>
        <span className="flex items-center h-[30px] text-[#6bb3cb]">{text}</span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNavWrapper;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
