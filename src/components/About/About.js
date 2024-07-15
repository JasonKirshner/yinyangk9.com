import Image from 'next/image'

import styles from './About.module.css'
import InViewLoad from '../InViewLoad/InViewLoad'

const About = ({ title, paragraphs, image1, image2 }) => {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <h2>{title}</h2>
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      <div className={styles.images}>
        <InViewLoad>
          <Image className={styles.img} src={image1} alt='Family Image' />
        </InViewLoad>
        <InViewLoad>
          <Image className={styles.img} src={image2} alt='Petting Dog Image' />
        </InViewLoad>
      </div>
    </div>
  )
}

export default About
