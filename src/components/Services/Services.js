// components/Services.js

import Service from './Service';

const Services = () => {
  return (
    <div className="services">
      <Service
        title="Service 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        backgroundColor="#f2f2f2"
        borderColor="#ccc"
      />
      <Service
        title="Service 2"
        description="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
        backgroundColor="#fff"
        borderColor="#ccc"
      />
      <Service
        title="Service 3"
        description="Fusce euismod consequat ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        backgroundColor="#f2f2f2"
        borderColor="#ccc"
      />
      <Service
        title="Service 4"
        description="Sed non mauris vitae erat consequat auctor eu in elit."
        backgroundColor="#fff"
        borderColor="#ccc"
      />
    </div>
  );
};

export default Services;
