import styles from './Service.module.css'
import Link from 'next/link'

const Service = ({ title, description, id }) => {
  return (
    <div className={styles.service}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      {/* <Link className={`button ${styles.contactUsBtn}`} href='/services'> */}
      {/* To go to part of servcies page you want, maybe add hrefId to pass to button in service/services */}
      <Link href='/services'>
        <button className={`button ${styles.serviceButton} ${id % 3 === 0 ? 'button' : 'button--alt'}`}>
          Learn More
        </button>
      </Link>
    </div>
  )
}

export default Service
