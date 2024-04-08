// components/Testimonial.js

const Testimonial = ({ imageUrl, text1, text2 }) => {
  return (
    <div className="testimonial">
      <img src={imageUrl} alt="Testimonial" className="image" />
      <div className="content">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default Testimonial;
