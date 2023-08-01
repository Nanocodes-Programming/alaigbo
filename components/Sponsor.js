import React from 'react';
import SponsorCard from './SponsorCard';
const images = [
  {
    src: '/olu.jpg',
    text: 'Voice of The East',
  },
  {
    src: '/img1.jpg',
    text: 'Switch Dev',
  },
  {
    src: '/img2.jpg',
    text: 'Ruoya Nigeria',
  },
  {
    src: '/img3.jpg',
    text: 'Service Culture Academy',
  },
];

const Sponsor = () => {
  return (
    <div className="bg-[#AFBD7733] py-[100px] min-h-screen px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl  md:text-5xl text-center font-bold mb-[100px]">
          Our <span className="text-[#F37435]">Partners</span>
        </h2>
        <div className="text-center flex justify-center">
          <p className="text-xl text-center max-w-[650px]">
            All our partners are working towards making sure Alaigbo becomes the
            technology hub of Africa by 2050.
          </p>
        </div>
        <div className="grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-[100px]">
          {images.map(({ src, text }) => (
            <SponsorCard key={src} src={src} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
