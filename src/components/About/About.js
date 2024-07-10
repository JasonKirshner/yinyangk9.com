import Image from 'next/image'

import styles from './About.module.css'

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
        <Image className={styles.img} src={image1} alt="Family Image" placeholder='blur' />
        <Image className={styles.img} src={image2} alt="Petting Dog Image" placeholder='blur' />
      </div>
    </div>
  )
}

export default About
