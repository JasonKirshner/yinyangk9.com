import Image from 'next/image'

import styles from './HeroSmall.module.css'
import InViewLoad from '../InViewLoad/InViewLoad'

const HeroSmall = ({ headerText, backgroundImage, className }) => {
  return (
    <div className={styles.heroSmall + ' ' + styles[className]}>
      <InViewLoad>
        <Image src={backgroundImage} alt='Hero Small Background Image' className={styles.bgImage} priority />
      </InViewLoad>
      <div className='container'>
        <h1 className={`${styles.headerText} h1`}>{headerText}</h1>
      </div>
    </div>
  )
}

export default HeroSmall
