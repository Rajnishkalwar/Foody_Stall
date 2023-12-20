// Import necessary React and React Icons components
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

// ContactComponent functional component
const Contact= () => {
  return (
    <div className='bg-slate-500 h-[600px] '>
      <h4 className="font-bold text-6xl ml-[570px] pt-4">Contact Page</h4>
      <div className="border-4 mx-auto mt-24 mjustify-items-center w-96 bg-slate-100 py-6  px-7 ">
      <div className="">

        <FaPhone className="icon" />
        <p>Phone: +91 9835662962</p>
      </div>
      <div className="border-black-2">
        <FaEnvelope className="icon" />
        <p>Email: rajnishprasadkalwar@gmail.com</p>
      </div>
      <div className="contact-item">
        <FaMapMarker className="icon" />
        <p>Address: NH-4 Sira Road, Tumkur</p>
      </div>
    </div>
    </div>
  );
};

export default Contact;
