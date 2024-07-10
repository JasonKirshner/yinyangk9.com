import Image from 'next/image'

import styles from './HeroSmall.module.css'

const HeroSmall = ({ headerText, backgroundImage }) => {
  return (
    <div className={styles.heroSmall}>
      <Image src={backgroundImage} alt="Hero Small Background Image" className={styles.bgImage} priority />
      <div className="container">
        <h1 className={`${styles.headerText} h1`}>{headerText}</h1>
      </div>
    </div>
  )
}

export default HeroSmall
