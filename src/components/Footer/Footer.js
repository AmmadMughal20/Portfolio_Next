import styles from '@/components/Footer/Footer.module.css'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.h2}>
        © 2021 Portfolio Made with &#128139; by Muhammad Ammad
      </p>
      <Image src='/MA.png' width={50} height={30} alt='logo' />
    </footer>
  )
}
