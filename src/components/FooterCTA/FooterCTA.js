import styles from './FooterCTA.module.css'
import Link from 'next/link'
import Image from 'next/image'

import pawsLeft from '../../../public/paws_left.png'
import pawsRight from '../../../public/paws_right.png'

const FooterCTA = () => {
  return (
    <div className={styles.footerCTA}>
      <div className={`${styles.footerCTAcontainer} container`}>
        <h2 className={`h1 ${styles.title}`}>We&apos;re Here To Help</h2>
        <Link href="/contact" className={`button button--secondary ${styles.footerCTAbtn}`}>
          Contact Us
        </Link>
        <Image src={pawsLeft} alt="Paws Left" className={styles.pawsLeft} />
        <Image src={pawsRight} alt="Paws Right" className={styles.pawsRight} />
      </div>
    </div>
  )
}

export default FooterCTA
