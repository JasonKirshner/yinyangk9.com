import styles from './HeroSmall.module.css'
import InViewLoad from '../InViewLoad/InViewLoad'

const HeroSmall = ({ headerText, backgroundImage, className, unoptimized }) => {
  return (
    <div className={styles.heroSmall + ' ' + styles[className]}>
      <InViewLoad>
        <img src={backgroundImage} alt='Hero Small Background Image' className={styles.bgImage} fetchpriority='high' />
      </InViewLoad>
      <div className='container'>
        <h1 className={`${styles.headerText} h1`}>{headerText}</h1>
      </div>
    </div>
  )
}

export default HeroSmall
