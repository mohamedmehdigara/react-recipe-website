import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const RecipeCarousel = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Carousel
        showArrows={true}
        showThumbs={false}
        className="mt-4"
        autoPlay={true}
        infiniteLoop={true}
      >
        <div className="h-64">
          <img
            src="/path-to-image-1.jpg"
            alt="Recipe 1"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="h-64">
          <img
            src="/path-to-image-2.jpg"
            alt="Recipe 2"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="h-64">
          <img
            src="/path-to-image-3.jpg"
            alt="Recipe 3"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default RecipeCarousel;
