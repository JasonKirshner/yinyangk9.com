// components/Service.js

import { useState } from 'react';

const Service = ({ title, description, backgroundColor, borderColor }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className="service"
      style={{ backgroundColor: backgroundColor, border: `1px solid ${borderColor}` }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        className={hovered ? 'button-hover' : ''}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        Learn More
      </button>
    </div>
  );
};

export default Service;
