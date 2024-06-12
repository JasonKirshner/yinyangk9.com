import React from 'react';
import styles from './Testimonials.module.css';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = ({ title, testimonials }) => {
  
  const renderTestimonials = () =>  
    testimonials.map((testimonial, i) => (
      <Testimonial
        key={i}
        name={testimonial.name}
        text={testimonial.testimony}
        image={testimonial.image}
      />
    ))

  return (
    <div className={styles.testimonialsWrapper}>
      <div className={`container ${styles.testimonialsContainer}`}>
        <h2 className={styles.title}>{ title }</h2>
        <div className={styles.testimonials}>
          {renderTestimonials()}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;