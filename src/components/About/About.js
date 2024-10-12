import Image from 'next/image'

import styles from './About.module.css'
import InViewLoad from '../InViewLoad/InViewLoad'

const About = ({ title, paragraphs, image1, image2, paws }) => {
  return (
    <div className={`container ${styles.about}`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.p}>{paragraphs[0]}</p>
          <p>{paragraphs[1]}</p>
        </div>
        <InViewLoad>
          <Image className={styles.img} src={image1} alt='Family Image' />
        </InViewLoad>
      </div>
      <InViewLoad>
        <Image className={styles.paws} src={paws} alt='Paw prints' />
      </InViewLoad>
      <div className={styles.content}>
        <InViewLoad>
          <Image className={styles.img} src={image2} alt='Petting Dog Image' />
        </InViewLoad>
        <div className={styles.text}>
          <p>{paragraphs[2]}</p>
          <p>{paragraphs[3]}</p>
          <p>{paragraphs[4]}</p>
        </div>
      </div>
    </div>
  )
}

export default About
