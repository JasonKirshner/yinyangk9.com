import styles from './Service.module.css'

const Service = ({ image, title, description, listItem1, listItem2 }) => {
  return (
    <div className={styles.service}>
      <img src={image} alt="service image" className={styles.images}/>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      {/* <button className={`button ${styles.serviceButton} ${ id % 3 == 0 ? 'button' : 'button--alt' }`}>
        Learn More
      </button> */}
      <h6 className={styles.service}>Pricing</h6>
      <ul>
        <li>{listItem1}</li>
        <li>{listItem2}</li>
      </ul>
    </div>
  );
};

export default Service;
