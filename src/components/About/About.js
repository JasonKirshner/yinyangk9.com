// components/About.js

import styles from './About.module.css'; // Adjust the path as necessary

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
        <img className={styles.img} src={image1} alt="Image 1" />
        <img className={styles.img} src={image2} alt="Image 2" />
      </div>
    </div>
  );
};

export default About;
