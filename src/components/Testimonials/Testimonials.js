import React from 'react';
import styles from './Testimonials.module.css';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
  return (
    <div className="container">
      <h2 className="title">Testimonials</h2>
      <div className={styles.testimonials}>
        <Testimonial
          name="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <Testimonial
          name="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
        <Testimonial
          name="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
      </div>
    </div>
  );
};

export default Testimonials;