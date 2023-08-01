import React from 'react';

const SemiHeader = ({ children }) => {
  return (
    <h1 className="text-center bg-[#F36C0A] py-8 text-3xl mb-4 text-white">
      {children}
    </h1>
  );
};

export default SemiHeader;
