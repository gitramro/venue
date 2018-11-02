import React from 'react';


const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.711549207605!2d-100.29046468450878!3d25.680854983673633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629563d91a6a9f%3A0x4833b800750556fa!2sArena+Monterrey!5e0!3m2!1sen!2smx!4v1541128678313"
        width="100%"
        height="550px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
          <div>Location</div>
       </div> 
    </div>
  );
};

export default Location;
