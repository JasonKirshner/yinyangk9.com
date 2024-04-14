// components/Service.js

const Service = ({ title, description, backgroundColor, borderColor }) => {
  return (
    <div
      className="service"
      style={{ backgroundColor: backgroundColor, border: `1px solid ${borderColor}` }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button className='button-hover'>
        Learn More
      </button>
    </div>
  );
};

export default Service;
