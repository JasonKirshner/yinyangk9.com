import ServiceDetail from '../ServiceDetail/ServiceDetail'

import styles from './ServiceDetails.module.css'

const ServiceDetails = ({ services }) => {
  const renderServices = services.map((service, i) => (
    <ServiceDetail key={i} name={service.name} description={service.description} pricing={service.pricingDetails} />
  ))

  return (
    <div className={styles.services}>
      {renderServices}
    </div>
  )
}

export default ServiceDetails
