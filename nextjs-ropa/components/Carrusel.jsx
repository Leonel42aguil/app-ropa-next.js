import "../app/css/productos.css"
import "../app/css/slider.css"
import "../app/css/style.css"

export default function Carousel() {
  return (
    <div>
      {/* Aquí van tus imágenes y botones de control del Carousel */}
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="99999999">
            <img src="https://i.pinimg.com/originals/44/2e/34/442e347a3a54a6459ffe331d495557a1.jpg" className="d-block w-100" alt="img1" />
          </div>

          <div className="carousel-item" data-bs-interval="999999">
            <img src="https://i.pinimg.com/474x/c2/a2/96/c2a2965df82fa8f3ac2e01c4076d2d15.jpg" className="d-block w-100" alt="img2" />
          </div>

          <div className="carousel-item" data-bs-interval="999999">
            <img src="https://th.bing.com/th/id/R.c0cfd02afa484b8556c9469581da66ad?rik=oyJZwYgfAYgrQw&pid=ImgRaw&r=0" className="d-block w-100" alt="img3" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <div>
            <div>
              <span className="visually-hidden">Next</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
