import styles from './Services.module.css';

import Service from '@/components/Service/Service';

const Services = ({ title, description, services }) => {
  const renderServices = () => services.map((service, i) => (
    <Service
      key={i}
      image={service.image}
      title={service.name}
      description={service.shortDescription}
      listItem1={service.listItem1}
      listItem2={service.listItem2}
    />
  ));

  return (
    <div className={styles.services}>
      <div className={`container ${styles.servicesContainer}`}>
        {/* <h3 className={styles.servicesTitle}>{title}</h3>
        <p>{description}</p> */}
        <div className={styles.servicesGrid}>
          {renderServices()}
        </div>
      </div>
    </div>
  );
};

export default Services;
