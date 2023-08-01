'use client';

import { Carousel } from '@mantine/carousel';
import Image from 'next/image';

const Hero = () => {
  const images = [
    {
      original: '/photo1.avif',
    },
    {
      original: '/imo.jpg',
    },
    {
      original: '/photo3.jpg',
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
