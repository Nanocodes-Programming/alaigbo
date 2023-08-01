import Image from 'next/image';
import React from 'react';

const ImageSlider = ({ item }) => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={item.original}
        fill
        alt="img"
        className="w-full !h-screen object-cover"
      />
    </div>
  );
};

export default ImageSlider;
