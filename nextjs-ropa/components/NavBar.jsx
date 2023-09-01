
export default function NavBar() {
    return ( 
        <div>
            {/* Código del encabezado con la información de contacto */}
            <header className="bg-danger text-white py-2">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <p className="mb-0 fs-4">Contacto +54 9 261 2524 171</p>
                    </div>
                </div>
            </header>

            {/* Código del encabezado con la barra de navegación */}
            <nav className="navbar navbar-expand-lg p-2" id="menu">
                <div className="container-fluid">
                    <a className="navbar-brand" href="index.html">
                        <span className="fs-4 fw-bold text-decoration-underline">Fred zuti</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item aa">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item aa">
                                <a className="nav-link" href="#teams">Equipo</a>
                            </li>
                            <li className="nav-item aa">
                                <a className="nav-link" href="#contenedor-formulario">Contacto</a>
                            </li>
                            <li className="nav-item dropdown aa">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Conoce <b>+</b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Productos</a></li>
                                    <li><a className="dropdown-item" href="#">Estilos</a></li>
                                    <li><a className="dropdown-item" href="#">Casas</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Novedades</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link disabled">VIP account</a> */}
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="text" placeholder="Your email" aria-label="email" required />
                            <button className="btn btn-primary btn-primary-outline-success" type="submit">Subscribite</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

