"use client";

import "../app/css/productos.css";
import "../app/css/slider.css";
import "../app/css/style.css";
import "./Products.css";
import React, { useState } from "react";
import "./SelectProduct.css"

export default function Product() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  
  const [showCards, setShowCards] = useState({
    cintos: false,
    calzados: false,
    carteras: false,
    camisas: false,
    camperas: false,
    buzos: false,
  });

  const toggleCards = (product) => {
    // Oculta todas las tarjetas
    setShowCards({
      cintos: false,
      calzados: false,
      carteras: false,
      camisas: false,
      camperas: false,
      buzos: false,
      [product]: true, // Muestra la tarjeta del producto clicado
    });
  };

  const [activeCard, setActiveCard] = useState(null);

  const toggleCard = (product) => {
    setActiveCard(product === activeCard ? null : product);
  };

  return (
    <section className="ofert">
      <div className={`ofert-1 ${activeCard === 'cintos' ? 'active' : ''}`}>
        <div className="ofert-product">
          <div className="ofert-img">
            <img src="/image/f1.png" alt="product1" />
          </div>
          <div className="ofert-text">
            <h3>Cintos</h3>
            <button className="btn-2" onClick={() => toggleCard('cintos')}>
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className={`ofert-1 ${activeCard === 'calzados' ? 'active' : ''}`}>
        <div className="ofert-product">
          <div className="ofert-img">
            <img src="/image/f2.png" alt="product2" />
          </div>
          <div className="ofert-text">
            <h3>Calzados</h3>
            <button className="btn-2" onClick={() => toggleCard('calzados')}>
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className={`ofert-1 ${activeCard === 'carteras' ? 'active' : ''}`}>
        <div className="ofert-product">
          <div className="ofert-img">
            <img src="/image/f3.png" alt="product3" />
          </div>
          <div className="ofert-text">
            <h3>Carteras</h3>
            <button className="btn-2" onClick={() => toggleCard('carteras')}>
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className={`ofert-1 ${activeCard === 'camisas' ? 'active' : ''}`}>
        <div className="ofert-product">
          <div className="ofert-img">
            <img src="/image/4.png" alt="product4" />
          </div>
          <div className="ofert-text">
            <h3>Camisas</h3>
            <button className="btn-2" onClick={() => toggleCard('camisas')}>
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className={`ofert-1 ${activeCard === 'camperas' ? 'active' : ''}`}>
        <div className="ofert-product">
          <div className="ofert-img">
            <img src="/image/5.png" alt="product5" />
          </div>
          <div className="ofert-text">
            <h3>Camperas</h3>
            <button className="btn-2" onClick={() => toggleCard('camperas')}>
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className={`ofert-1 ${activeCard === 'buzos' ? 'active' : ''}`}>
        <div className="ofert-product">
          <div className="ofert-img">
            <img src="/image/6.png" alt="product6" />
          </div>
          <div className="ofert-text">
            <h3>Buzos</h3>
            <button className="btn-2" onClick={() => toggleCard('buzos')}>
              Comprar
            </button>
          </div>
        </div>
      </div>
      
      {/* Tarjetas de detalles */}
      {activeCard === 'cintos' && (
        <section className="contenedor">
        {/* Contenedor de elementos */}
        <div className="contenedor-items">
          <div className="item">
            <span className="titulo-item">Box Engasse</span>
            <img src="/image/img/boxengasse.png" alt="" className="img-item" />
            <span className="precio-item">$15.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">English Horse</span>
            <img src="/image/img/englishrose.png" alt="" className="img-item" />
            <span className="precio-item">$25.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">Knock Nap</span>
            <img src="/image/img/knocknap.png" alt="" className="img-item" />
            <span className="precio-item">$35.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">La Night</span>
            <img src="/image/img/lanight.png" alt="" className="img-item" />
            <span className="precio-item">$18.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">Silver All</span>
            <img src="/image/img/silverall.png" alt="" className="img-item" />
            <span className="precio-item">$32.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">Skin Glam</span>
            <img src="/image/img/skinglam.png" alt="" className="img-item" />
            <span className="precio-item">$18.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">Midimix</span>
            <img src="/image/img/midimix.png" alt="" className="img-item" />
            <span className="precio-item">$54.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">Sir Blue</span>
            <img src="/image/img/sirblue.png" alt="" className="img-item" />
            <span className="precio-item">$32.000</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
          <div className="item">
            <span className="titulo-item">Middlesteel</span>
            <img src="/image/img//middlesteel.png" alt="" className="img-item" />
            <span className="precio-item">$42.800</span>
            <button className="boton-item">Agregar al Carrito</button>
          </div>
        </div>
        </section>
      )}

      {activeCard === 'calzados' && (
        <div className="ofert-1">
          <div className="ofert-card">
            <p>Detalles de Calzados</p>
          </div>
        </div>
      )}

      {activeCard === 'carteras' && (
        <div className="ofert-1">
          <div className="ofert-card">
            <p>Detalles de Carteras</p>
          </div>
        </div>
      )}

      {activeCard === 'camisas' && (
        <div className="ofert-1">
          <div className="ofert-card">
            <p>Detalles de Camisas</p>
          </div>
        </div>
      )}

      {activeCard === 'camperas' && (
        <div className="ofert-1">
          <div className="ofert-card">
            <p>Detalles de Camperas</p>
          </div>
        </div>
      )}

      {activeCard === 'buzos' && (
        <div className="ofert-1">
          <div className="ofert-card">
            <p>Detalles de Buzos</p>
          </div>
        </div>
      )}
    </section>
  );
}
