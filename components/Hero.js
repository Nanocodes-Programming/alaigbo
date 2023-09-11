'use client';

import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

const Hero = () => {
  const images = [
    {
      original: '/1.jpg',
    },
    {
      original: '/2.jpg',
    },
    {
      original: '/3.jpg',
    },
    {
      original: '/4.jpg',
    },
    {
      original: '/5.jpeg',
    },
    {
      original: '/6.jpg',
    },
    {
      original: '/7.jpg',
    },
    {
      original: '/8.jpg',
    },
    {
      original: '/9.jpg',
    },
    {
      original: '/10.jpg',
    },
    {
      original: '/11.jpg',
    },
    {
      original: '/12.jpg',
    },
    {
      original: '/13.jpg',
    },
    {
      original: '/14.jpg',
    },
    {
      original: '/15.jpeg',
    },
    {
      original: '/16.jpg',
    },
    {
      original: '/17.webp',
    },
  ];
  return (
    <div className="h-screen w-full flex">
      <Carousel
        loop
        dragFree
        height="100%"
        className="h-screen"
        slideSize={'100%'}
        sx={{ flex: 1 }}
        withIndicators
      >
        {images.map((image, index) => (
          <Carousel.Slide key={index} className="relative">
            <Image
              src={image.original}
              alt="image"
              fill
              priority
              className="object-cover"
            />
          </Carousel.Slide>
        ))}
      </Carousel>
      {/* <ImageGallery
        renderItem={(item) => <ImageSlider item={item} />}
        items={images}
        autoPlay
        showBullets
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}
        useBrowserFullscreen={false}
        additionalClass="w-full"
      /> */}
    </div>
  );
};

export default Hero;
