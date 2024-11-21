"use client";
import { useState } from 'react';
import styles from './header.module.scss'
import Link from 'next/link'

export default function Header({ headerTitle }) {

  const [isActive, setIsActive] = useState(false);

  const closeNav = () => {
    setIsActive(false);
  };
  
  return (
    <>
    
    <header className={`${styles.header} ${isActive ? styles.expanded : ''} justify-between items-center sm:fixed ipad:justify-center px-5 2xl:h-40 xl:h-30 lg:h-28 md:h-20 h-20`}>

    {isActive && (
      <nav className={styles.navLinks}>
        <Link
          href="/"
          className='font-medium text-xl leading-10'
          onClick={closeNav}
        >
          HOME
        </Link>

        <br />
        
        <Link
          href="/contact"
          className='font-medium text-xl leading-10'
          onClick={closeNav}
        >
          CONTACT
        </Link>
      </nav>
    )}

      <Link href="/" className='absolute top-0'>
        <h1 className={styles.headerTitle}>
          {headerTitle}
        </h1>
      </Link>

    <div className='burger'>
      <button className="group ipad:hidden absolute top-5 right-3" onClick={() => setIsActive(!isActive)}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
          <div className="flex flex-col justify-between items-end w-[30px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isActive ? 'rotate-[42deg]' : ''
            }`}></div>
            <div className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
              isActive ? '-translate-x-10' : ''
            }`}></div>
            <div className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
              isActive ? '-rotate-[42deg]' : ''
            }`}></div>
          </div>
        </div>
      </button>
    </div>
    
    </header>

    </>
  )
}