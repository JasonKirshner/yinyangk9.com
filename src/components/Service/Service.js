import styles from './Service.module.css'

const Service = ({ title, description, id }) => {
  return (
    <div className={styles.service}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <button className={`button ${styles.serviceButton} ${ id % 3 == 0 ? 'button' : 'button--alt' }`}>
        Learn More
      </button>
    </div>
  )
}

export default Service
