import Link from 'next/link'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/hero_bg.png" alt="Footer Background" className={styles.bgImage} />
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerLeft}>
          <Link className={styles.homeLink} href="/">
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </Link>
          <p className={styles.copyright}>© 2024 Yin Yang K9. All Rights Reserved</p>
        </div>
        <div className={styles.footerRight}>
          <Link href="mailto:yinyangk9@gmail.com" className={styles.contactLink}>
            <img src="/mail.png" alt="Email Icon" className={styles.contactIcon} />
            <p className={styles.contactLabel}>yinyangk9@gmail.com</p>
          </Link>
          <Link href="tel:+(760) 855-5667" className={styles.contactLink}>
            <img src="/phone.png" alt="Phone Icon" className={styles.contactIcon} />
            <p className={styles.contactLabel}>+(760) 855-5667</p>
          </Link>
          <div className={styles.socials}>
            <Link href="http://facebook.com" className={styles.socialLink}>
              <img src="/facebook.png" alt="Facebook Icon" className={styles.socialIcon} />
            </Link>
            <Link href="http://instagram.com" className={styles.socialLink}>
              <img src="/instagram.png" alt="Facebook Icon" className={styles.socialIcon} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
