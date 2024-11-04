import React from 'react';

const ContactMeDesign = ({ icon: Icon, text }) => {
  return (
    <div className="w-auto h-auto p-3 border flex justify-start items-center gap-4 rounded shadow-sm">
      <Icon className="text-xl" /> {/* Correctly render the Icon component */}
      <p className='tracking-wide font-medium'>{text}</p>
    </div>
  );
};

export default ContactMeDesign;
