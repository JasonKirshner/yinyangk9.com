// components/FooterCTA.js

const FooterCTA = ({ title, buttonText }) => {
  return (
    <div className="footer-cta">
      <h2>{title}</h2>
      <button>{buttonText}</button>
    </div>
  );
};

export default FooterCTA;
