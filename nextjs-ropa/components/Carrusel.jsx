import "../app/css/productos.css"
import "../app/css/slider.css"
import "../app/css/style.css"


export default function Carousel() {
  return (
   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      
      <div class="carousel-item active" data-bs-interval="99999999">
        {/* <img src="Images/oficina.jpg" class="d-block w-100" alt="img1" /> */}
        <img src="https://i.pinimg.com/originals/44/2e/34/442e347a3a54a6459ffe331d495557a1.jpg" class="d-block w-100" alt="img1" />
      </div>

      <div class="carousel-item" data-bs-interval="999999">
        {/* <img src="Images/modelo.jpg" class="d-block w-100" alt="img2" /> */}
        <img src="https://i.pinimg.com/474x/c2/a2/96/c2a2965df82fa8f3ac2e01c4076d2d15.jpg" class="d-block w-100" alt="img2" />
      </div>

      <div class="carousel-item" data-bs-interval="999999">
        {/* <img src="Images/lv.jpg" class="d-block w-100" alt="img3" /> */}
        <img src="https://th.bing.com/th/id/R.c0cfd02afa484b8556c9469581da66ad?rik=oyJZwYgfAYgrQw&pid=ImgRaw&r=0" class="d-block w-100" alt="img3" />
      </div>

    </div>
    
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <div>
        <div>

      <span class="visually-hidden">Next</span>
        </div>
      </div>
    </button>
  </div>
  )
}
