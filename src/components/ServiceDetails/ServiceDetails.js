import ServiceDetail from '../ServiceDetail/ServiceDetail'

import styles from './ServiceDetails.module.css'

const ServiceDetails = ({ services }) => {
  const renderServices = services.map((service, i) => (
    <ServiceDetail
      key={i}
      image={service.image}
      name={service.name}
      code={service.code}
      description={service.description}
      pricing={service.pricingDetails}
    />
  ))

  return (
    <div className={`container ${styles.services}`}>
      {renderServices}
    </div>
  )
}

export default ServiceDetails
