import Image from 'next/image';

import mouthpieceImage from '../../../public/mouthpiece.png'

import styles from './Testimonial.module.css';

const Testimonial = ({ name, text, image }) => {
  return (
    <div className={styles.testimonial}>
      <Image src={image} className={styles.avatar} alt={`${name} Image`} placeholder='blur' />
      <p className={styles.text}>{text}</p>
      <p className={styles.name}>{name}</p>
      <Image src={mouthpieceImage} className={styles.mouthpiece} alt={'Chat bubble mouthpiece image'} placeholder='blur' />
    </div>
  );
};

export default Testimonial;