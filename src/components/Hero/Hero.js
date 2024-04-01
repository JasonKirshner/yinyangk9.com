// components/Hero.js

import 'Hero.css';

const Hero = ({ title, description, buttonText1, buttonText2, imageUrl }) => {
  return (
    <div className="hero">
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="buttons">
          <button>{buttonText1}</button>
          <button>{buttonText2}</button>
        </div>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
