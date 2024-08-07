import Image from 'next/image'

import mouthpieceImage from '../../../public/mouthpiece.png'

import styles from './Testimonial.module.css'
import InViewLoad from '../InViewLoad/InViewLoad'

const Testimonial = ({ name, dogName, text, image }) => {
  return (
    <div className={styles.testimonial}>
      <InViewLoad>
        <Image src={image} className={styles.avatar} alt={`Image of ${name}`} />
      </InViewLoad>
      <h4 className={styles.dogName}>{dogName}</h4>
      <p className={styles.text}>{text}</p>
      <p className={styles.name}>{name}</p>
      <Image src={mouthpieceImage} className={styles.mouthpiece} alt='Chat bubble mouthpiece image' priority />
    </div>
  )
}

export default Testimonial
