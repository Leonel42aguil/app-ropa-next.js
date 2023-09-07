"use client";

import "../app/css/productos.css";
import "../app/css/slider.css";
import "../app/css/style.css";
import "./Products.css";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Product() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section class="ofert">
      <div class="ofert-1">
        <div class="ofert-product">
          <div class="ofert-img">
            <img src="/image/f1.png" alt="product1" />
          </div>
          <div class="ofert-text">
            <h3>Cintos</h3>
            <a href="#" class="btn-2">
              Comprar Producto 1
            </a>
          </div>
        </div>
      </div>

      <div class="ofert-1">
        <div class="ofert-product">
          <div class="ofert-img">
            <img src="/image/f2.png" alt="product2" />
          </div>
          <div class="ofert-text">
            <h3>Calzados</h3>
            <a href="#" class="btn-2">
              Comprar Producto 2
            </a>
          </div>
        </div>
      </div>

      <div class="ofert-1">
        <div class="ofert-product">
          <div class="ofert-img">
            <img src="/image/f3.png" alt="product3" />
          </div>
          <div class="ofert-text">
            <h3>Carteras</h3>
            <a href="#" class="btn-2">
              Comprar Producto 3
            </a>
          </div>
        </div>
      </div>

      <div class="ofert-1">
        <div class="ofert-product">
          <div class="ofert-img">
            <img src="/image/4.png" alt="product4" />
          </div>
          <div class="ofert-text">
            <h3>Camisas</h3>
            <a href="#" class="btn-2">
              Comprar Producto 4
            </a>
          </div>
        </div>
      </div>

      <div class="ofert-1">
        <div class="ofert-product">
          <div class="ofert-img">
            <img src="/image/4.png" alt="product4" />
          </div>
          <div class="ofert-text">
            <h3>Camperas</h3>
            <a href="#" class="btn-2">
              Comprar Producto 4
            </a>
          </div>
        </div>
      </div>
      <div class="ofert-1">
        <div class="ofert-product">
          <div class="ofert-img">
            <img src="/image/4.png" alt="product4" />
          </div>
          <div class="ofert-text">
            <h3>Buzos</h3>
            <a href="#" class="btn-2">
              Comprar Producto 4
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
