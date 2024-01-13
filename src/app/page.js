import Image from 'next/image'
import styles from './page.module.css'

export default async function Home() {

  let res = await fetch('https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam', {
    next: { revalidate: 5 }
  })

  let result = await res.json()
  
  return (
    <>
      <h1>Main</h1>
      <p>{result.seconds}</p>
    </>
  )
}
