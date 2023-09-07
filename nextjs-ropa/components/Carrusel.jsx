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
          src="https://i.pinimg.com/474x/c2/a2/96/c2a2965df82fa8f3ac2e01c4076d2d15.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/R.c0cfd02afa484b8556c9469581da66ad?rik=oyJZwYgfAYgrQw&pid=ImgRaw&r=0"
          alt="Third slide"
        />
      </Carousel.Item>
      {/* Agrega más imágenes aquí */}
    </Carousel>
  );
}
