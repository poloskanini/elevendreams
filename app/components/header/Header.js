import styles from './header.module.scss'
import Link from 'next/link'

export default function Header({ headerTitle }) {
  return (
    <header className={styles.content}>
      <Link href="/">
        <h1 className={styles.headerTitle}>
          {headerTitle}
        </h1>
      </Link>
    </header>
  )
}