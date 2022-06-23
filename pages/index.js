import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <img className='grid' src='/grid.webp'></img>
      <div className='navbar'>
        <div className='buttons'>
          <h1>Home</h1>
          <h1>Contact</h1>
          <h1>Resume</h1>
        </div>
      </div>
      <div className='largeName'>
        <h1>Jack Hartwig</h1>
      </div>
      <div className='bio'>
        <h1>A Full Stack</h1>
        <h1>Web Dev</h1>
      </div>
    </div>
  )
}
