"use client";

import "../app/css/productos.css";
import "../app/css/slider.css";
import "../app/css/style.css";
import "./Products.css";
import React, { useState } from "react";
import "./SelectProduct.css"

export default function Product() {
  const products = [
    {
      name: 'Cintos',
      imgSrc: '/image/f1.png',
      details: [
        { name: 'Box Engasse', imgSrc: '/image/img/boxengasse.png', price: '$15.000' },
        { name: 'English Horse', imgSrc: '/image/img/englishrose.png', price: '$25.000' },
      ],
    },
    {
      name: 'Calzados',
      imgSrc: '/image/f2.png',
      details: [
        { name: 'Knock Nap', imgSrc: '/image/img/knocknap.png', price: '$35.000' },
        { name: 'La Night', imgSrc: '/image/img/lanight.png', price: '$18.000' },
        { name: 'Silver All', imgSrc: '/image/img/silverall.png', price: '$32.000' },
      ],
    },
    {
      name: 'Carteras',
      imgSrc: '/image/f3.png',
      details: [
        { name: 'Box Engasse', imgSrc: '/image/img/boxengasse.png', price: '$15.000' },
        { name: 'Knock Nap', imgSrc: '/image/img/knocknap.png', price: '$35.000' },
        { name: 'La Night', imgSrc: '/image/img/lanight.png', price: '$18.000' },
        { name: 'Skin Glam', imgSrc: '/image/img/skinglam.png', price: '$18.000' },
        { name: 'Sir Blue', imgSrc: '/image/img/sirblue.png', price: '$32.000' },
      ],
    },
    {
      name: 'Camisas',
      imgSrc: '/image/4.png',
      details: [
        { name: 'Skin Glam', imgSrc: '/image/img/skinglam.png', price: '$18.000' },
        { name: 'Midimix', imgSrc: '/image/img/midimix.png', price: '$54.000' },
        { name: 'Sir Blue', imgSrc: '/image/img/sirblue.png', price: '$32.000' },
        { name: 'Middlesteel', imgSrc: '/image/img/middlesteel.png', price: '$42.800' },
      ],
    },
    {
      name: 'Camperas',
      imgSrc: '/image/5.png',
      details: [
        { name: 'La Night', imgSrc: '/image/img/lanight.png', price: '$18.000' },
        { name: 'Silver All', imgSrc: '/image/img/silverall.png', price: '$32.000' },
        { name: 'Skin Glam', imgSrc: '/image/img/skinglam.png', price: '$18.000' },
        { name: 'Midimix', imgSrc: '/image/img/midimix.png', price: '$54.000' },
        { name: 'Sir Blue', imgSrc: '/image/img/sirblue.png', price: '$32.000' },
        { name: 'Middlesteel', imgSrc: '/image/img/middlesteel.png', price: '$42.800' },
      ],
    },
    {
      name: 'Buzos',
      imgSrc: '/image/6.png',
      details: [
        { name: 'Box Engasse', imgSrc: '/image/img/boxengasse.png', price: '$15.000' },
        { name: 'Knock Nap', imgSrc: '/image/img/knocknap.png', price: '$35.000' },
        { name: 'La Night', imgSrc: '/image/img/lanight.png', price: '$18.000' },
        { name: 'Sir Blue', imgSrc: '/image/img/sirblue.png', price: '$32.000' },
        { name: 'Middlesteel', imgSrc: '/image/img/middlesteel.png', price: '$42.800' },
      ],
    },
  ];

  const [activeProduct, setActiveProduct] = useState(null);

  const toggleProduct = (product) => {
    setActiveProduct(product === activeProduct ? null : product);
  };

  return (
    <section className="ofert">
      {products.map((product) => (
        <div key={product.name} className={`ofert-1 ${activeProduct === product.name ? 'active' : ''}`}>
          <div className="ofert-product">
            <div className="ofert-img">
              <img src={product.imgSrc} alt={`product-${product.name}`} />
            </div>
            <div className="ofert-text">
              <h3>{product.name}</h3>
              <button className="btn-2" onClick={() => toggleProduct(product.name)}>
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
      {activeProduct && (
        <section className="contenedor">
          <div className="contenedor-items">
            {products
              .find((product) => product.name === activeProduct)
              .details.map((detail) => (
                <div key={detail.name} className="item">
                  <span className="titulo-item">{detail.name}</span>
                  <img src={detail.imgSrc} alt={`detail-${detail.name}`} className="img-item" />
                  <span className="precio-item">{detail.price}</span>
                  <button className="boton-item">Agregar al Carrito</button>
                </div>
              ))}
          </div>
        </section>
      )}
    </section>
  );
}
