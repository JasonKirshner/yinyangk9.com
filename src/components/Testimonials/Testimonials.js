import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import styles from './Testimonials.module.css'
import Testimonial from '../Testimonial/Testimonial'

const Testimonials = ({ title, testimonials }) => {
  const renderTestimonials = () =>
    testimonials.map((testimonial, i) => (
      <Testimonial
        key={i}
        name={testimonial.name}
        dogName={testimonial.dogName}
        text={testimonial.testimony}
        image={testimonial.image}
      />
    ))

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
  }

  return (
    <div className={styles.testimonialsWrapper}>
      <div className={`container ${styles.testimonialsContainer}`}>
        <h3 className={styles.title}>{title}</h3>
        <Carousel
          responsive={responsive}
          ssr
          arrows={false}
          swipeable
          infinite
          autoPlay
          // autoPlaySpeed={5000}
          containerClass={styles.testimonials}
          itemClass={styles.testimonialsItem}
          deviceType='desktop'
          customTransition='transform 5s linear'
          transitionDuration={5000}
        >
          {renderTestimonials()}
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials
