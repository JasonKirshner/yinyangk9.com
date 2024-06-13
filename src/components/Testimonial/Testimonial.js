import styles from './Testimonial.module.css';

const Testimonial = ({ name, text, image }) => {
  return (
    <div className={styles.testimonial}>
      <img src={image} className={styles.avatar} />
      <p className={styles.text}>{text}</p>
      <p className={styles.name}>{name}</p>
      <img src="./mouthpiece.png" className={styles.mouthpiece} />
    </div>
  );
};

export default Testimonial;