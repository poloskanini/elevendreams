import styles from './hero.module.scss'
import Link from 'next/link'
import FuzzyOverlay from '../fuzzyoverlay/Fuzzy'

export default function Hero({ title, subtitle }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        <Link href="/contact" className="text-cyan-50">
          Contact
        </Link>
      </div>
      
      <FuzzyOverlay />
    </section>
  )
}