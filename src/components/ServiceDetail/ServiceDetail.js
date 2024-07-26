import Image from 'next/image'

import InViewLoad from '../InViewLoad/InViewLoad'
import styles from './ServiceDetail.module.css'

const ServiceDetail = ({ image, name, description, pricing }) => {
  return (
    <div className={styles.service}>
      <InViewLoad>
        <Image className={styles.image} src={image} alt={`Image for ${name} service`} />
      </InViewLoad>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <h4 className={styles.title}>Pricing</h4>
      <ul className={styles.pricing}>
        {pricing.map((price, i) => <li key={i} className={styles.price}>{price}</li>)}
      </ul>
    </div>
  )
}

export default ServiceDetail
