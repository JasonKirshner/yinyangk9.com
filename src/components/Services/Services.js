import styles from './Services.module.css'

import Service from '@/components/Service/Service'

const Services = ({ title, services }) => {
  const renderServices = () => services.map((service, i) => (
    <Service
      key={i}
      id={i}
      title={service.name}
      description={service.shortDescription}
    />
  ))

  return (
    <div className={styles.services}>
      <div className={`container ${styles.servicesContainer}`}>
        <h3 className={styles.servicesTitle}>{title}</h3>
        <div className={styles.servicesGrid}>
          {renderServices()}
        </div>
      </div>
    </div>
  )
}

export default Services
