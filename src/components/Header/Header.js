import styles from '@/components/Header/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo_container}>
        <Image src='/MA.png' width={80} height={50} alt='logo' />
      </div>
      <div className={styles.nav}>
        <nav className={styles.shift}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href='/' className={styles.a}>
                Home
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='/Education' className={styles.a}>
                Education
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='/Projects' className={styles.a}>
                Projects
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='/Experience' className={styles.a}>
                Experience
              </Link>
            </li >
            <li className={styles.li}>
              <Link href='/Achievements' className={styles.a}>
                Achievements
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='/Contact' className={styles.a}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
