import Link from 'next/link'

import styles from './Footer.module.css'
import InViewLoad from '../InViewLoad/InViewLoad'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <InViewLoad>
        <img src='/hero_bg.png' alt='Footer Background' className={styles.bgImage} />
      </InViewLoad>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerLeft}>
          <InViewLoad>
            <Link className={styles.homeLink} href='/'>
              <img src='/logo.webp' alt='Logo' className={styles.logo} />
            </Link>
          </InViewLoad>
          <p className={styles.copyright}>© 2024 Yin Yang K9. All Rights Reserved</p>
          <div className={styles.legal}>
            <Link href='/privacy-policy' className={`${styles.legalLink} p`}>Privacy Policy</Link>
            <Link href='/terms-of-service' className={`${styles.legalLink} p`}>Terms Of Service</Link>
          </div>
        </div>
        <div className={styles.footerRight}>
          <Link href='mailto:yinyangk9@gmail.com' className={styles.contactLink}>
            <img src='/mail.png' alt='Email Icon' className={styles.contactIcon} />
            <p className={styles.contactLabel}>yinyangk9@gmail.com</p>
          </Link>
          <Link href='tel:+(760) 855-5667' className={styles.contactLink}>
            <img src='/phone.png' alt='Phone Icon' className={styles.contactIcon} />
            <p className={styles.contactLabel}>(858) 280-5610</p>
          </Link>
          <Link href='https://www.instagram.com/yinyangk9/' className={styles.contactLink}>
            <img src='/instagram.webp' alt='Facebook Icon' className={styles.contactIcon} />
            <p className={styles.contactLabel}>@yinyangk9</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
