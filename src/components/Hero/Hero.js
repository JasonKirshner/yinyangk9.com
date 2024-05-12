// components/Hero.js

import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = ({ title, description, buttonText1, buttonText2, imageUrl, bgImage }) => {
  return (
    <div className={styles.hero}>
      <img src={bgImage} alt="Hero Background Image" className={styles.bgImage} />
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.content}>
          <h1 className={`h1 ${styles.title}`}>{title}</h1>
          <p className={`h2 ${styles.description}`}>{description}</p>
          <div className={styles.buttons}>
            <Link className={`button ${styles.contactUsBtn}`} href="/contact">{buttonText1}</Link>
            <Link className={`button button--alt ${styles.aboutUsBtn}`} href="/about">{buttonText2}</Link>
          </div>
        </div>
        <img src={imageUrl} alt="Hero Image" className={styles.image} />
      </div>
    </div>
  );
};

export default Hero;
