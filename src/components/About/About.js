// components/About.js

const About = ({ title, paragraph, image1, image2 }) => {
  return (
    <div className="about">
      <div className="text">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
      <div className="images">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
      </div>
    </div>
  );
};

export default About;
