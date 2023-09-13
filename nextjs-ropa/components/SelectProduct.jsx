import React from 'react';
import "./SelectProduct.css"

const SelectProduct = () => {
  return (
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
        {/* Carrito de Compras */}
        <div className="carrito" id="carrito">
          <div className="header-carrito">
            <h2>Tu Carrito</h2>
          </div>
  
          <div className="carrito-items">{/* Aquí se mostrarán los elementos del carrito */}</div>
          <div className="carrito-total">
            <div className="fila">
              <strong>Tu Total</strong>
              <span className="carrito-precio-total">$120.000,00</span>
            </div>
            <button className="btn-pagar">
              Pagar <i className="fa-solid fa-bag-shopping"></i>
            </button>
          </div>
        </div>
      </section>
  );
};

export default SelectProduct;
