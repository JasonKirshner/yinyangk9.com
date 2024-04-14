// components/Footer.js

const Footer = ({ logoUrl, textLeft, textRight1, textRight2, textRight3, imageUrl }) => {
  return (
    <footer className="footer">
      <div className="content-left">
        <img src={logoUrl} alt="Logo" className="logo" />
        <p>{textLeft}</p>
      </div>
      <div className="content-right">
        <p>{textRight1}</p>
        <p>{textRight2}</p>
        <p>{textRight3}</p>
      </div>
    </footer>
  );
};

export default Footer;