import Image from 'next/image'
import Link from 'next/link'
import InViewLoad from '../InViewLoad/InViewLoad'

import styles from './Hero.module.css'

const Hero = ({ title, description, buttonText1, buttonText2, image, bgImage }) => {
  return (
    <div className={styles.hero}>
      <InViewLoad>
        <Image src={bgImage} alt='Hero Background Image' className={styles.bgImage} priority />
      </InViewLoad>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.content}>
          <h1 className={`h1 ${styles.title}`}>{title}</h1>
          <p className={`h2 ${styles.description}`}>{description}</p>
          <div className={styles.buttons}>
            <Link className={`button ${styles.contactUsBtn}`} href='/contact'>{buttonText1}</Link>
            <Link className={`button button--alt ${styles.aboutUsBtn}`} href='/about'>{buttonText2}</Link>
          </div>
        </div>
        <InViewLoad>
          <img src={image} alt='Hero Image' className={styles.image} fetchpriority='high' />
        </InViewLoad>
      </div>
    </div>
  )
}

export default Hero
