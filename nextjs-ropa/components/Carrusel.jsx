"use client";

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/image/Puma.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/image/modelo.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/image/home-puma.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      {/* Agrega más imágenes aquí */}
    </Carousel>
  );
}
