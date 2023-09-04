"use client";
import "../app/css/productos.css";
import "../app/css/slider.css";
import "../app/css/style.css";
import React, { useState, useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [text, setText] = useState("Contacto +54 9 261 2524 171");
  const [navbarFixed, setNavbarFixed] = useState(false);

  const handleMouseOver = () => {
    setText("Además te damos referencia a nuestras redes sociales");
  };

  const handleMouseOut = () => {
    setText("Contacto +54 9 261 2524 171");
  };

  useEffect(() => {
    const header = document.getElementById("header");
    const navBar = document.getElementById("navbar");
    const headerOffset = header.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > headerOffset) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`bg-danger text-white py-3 ${navbarFixed ? "fixed" : ""}`}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <p
              className="mb-0 fs-5"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              {text}
            </p>
          </div>
        </div>
      </header>

      <section id="header">
        <a href="#">
          <img src="" className="logo" alt="logo" />
        </a>

        <div>
          <ul id="navbar" className={navbarFixed ? "fixed" : ""}>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Logo</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}


// {/* <nav className="navbar navbar-expand-lg p-2" id="menu">
// <div className="container-fluid">
//   <a className="navbar-brand" href="index.html">
//     <span className="fs-4 fw-bold text-decoration-underline">
//       Fred zuti
//     </span>
//   </a>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-bs-toggle="collapse"
//     data-bs-target="#navbarSupportedContent"
//     aria-controls="navbarSupportedContent"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
//       <li className="nav-item aa">
//         <a className="nav-link" href="#">
//           Home
//         </a>
//       </li>
//       <li className="nav-item aa">
//         <a className="nav-link" href="#teams">
//           Equipo
//         </a>
//       </li>
//       <li className="nav-item aa">
//         <a className="nav-link" href="#contenedor-formulario">
//           Contacto
//         </a>
//       </li>
//       <li className="nav-item dropdown aa">
//         <a
//           className="nav-link dropdown-toggle"
//           href="#"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           Conoce <b>+</b>
//         </a>
//         <ul className="dropdown-menu">
//           <li>
//             <a className="dropdown-item" href="#">
//               Productos
//             </a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">
//               Estilos
//             </a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">
//               Casas
//             </a>
//           </li>
//           <li>
//             <hr className="dropdown-divider" />
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">
//               Novedades
//             </a>
//           </li>
//         </ul>
//       </li>
//       <li className="nav-item">
//         {/* <a className="nav-link disabled">VIP account</a> */}
//       </li>
//     </ul>

//     <form className="d-flex" role="search">
//       <input
//         className="form-control me-2"
//         type="text"
//         placeholder="Your email"
//         aria-label="email"
//         required
//       />
//       <button
//         className="btn btn-primary btn-primary-outline-success"
//         type="submit"
//       >
//         Subscribite
//       </button>
//     </form>
//   </div>
// </div>
// </nav> */}
