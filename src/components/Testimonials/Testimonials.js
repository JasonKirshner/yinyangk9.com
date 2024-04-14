// components/Testimonials.js

import Testimonial from '@/components/Testimonial/Testimonial';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Testimonial
        imageUrl="/testimonial1.jpg"
        text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        text2="- John Doe"
      />
      <Testimonial
        imageUrl="/testimonial2.jpg"
        text1="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        text2="- Jane Doe"
      />
      <Testimonial
        imageUrl="/testimonial3.jpg"
        text1="Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        text2="- Mike Smith"
      />
    </div>
  );
};

export default Testimonials;
