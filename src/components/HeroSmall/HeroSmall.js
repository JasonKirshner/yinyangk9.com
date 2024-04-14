// components/HeroSmall.js

const HeroSmall = ({ headerText, backgroundImage }) => {
  return (
    <div className="hero-small">
      <div className="overlay"></div>
      <h1 className="header-text">{headerText}</h1>
    </div>
  );
};

export default HeroSmall;
