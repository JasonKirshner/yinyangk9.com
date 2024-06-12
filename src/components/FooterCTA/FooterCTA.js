// components/FooterCTA.js

import styles from './FooterCTA.module.css'; // Adjust the path as necessary
import Link from 'next/link'

const FooterCTA = ({ title, buttonText }) => {
  return (
    <div className={styles.footerCTA}>
      <div className={styles.footerContent}>
        <h2 className={styles.h2}>{title}</h2>
        <Link href="/contact"><button className={styles.button} href="/contact">{buttonText}</button></Link>
      </div>

      <div className={styles.pawTopLeft}>
        <img src="Paw.png" alt="Paw 1"/>
      </div>
      <div className={styles.pawBottomLeft}>
        <img src="Paw.png" alt="Paw 2"/>
      </div>
      <div className={styles.pawTopRight}>
        <img src="Paw.png" alt="Paw 3"/>
      </div>
      <div className="paw paw-bottom-right">
        <img src="Paw.png" alt="Paw 4"/>
      </div>

    </div>
  );
};

export default FooterCTA;
