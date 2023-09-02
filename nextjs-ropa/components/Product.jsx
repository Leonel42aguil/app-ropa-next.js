import "../app/css/productos.css"
import "../app/css/slider.css"
import "../app/css/style.css"

export default function Product () {
  return (
    <section class="container-fluid">
        <div class="row w-75 mx-auto servicio-fila">

          <div class="col-lg-6 col-md-12 col-sm-12
          d-flex my-5 icono-wrap">
              {/* <img src="Images/t-shirt Black.png" width="180" height="160"/> */}
              <img src="https://i.pinimg.com/originals/44/2e/34/442e347a3a54a6459ffe331d495557a1.jpg" width="180" height="160" alt=""/>
            <div>
              <h3 class="fs-5 mt-4 px-4 pb-1">Wolf black</h3>
              <p class="px-4">Modelo clasico para el entrenamiento, ya sea solo o como lider en tu equipo. 
                Saca todo el potencial con la comodidad y la facha de la sencillez
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12
          d-flex my-5 icono-wrap">
              <img src="https://i.pinimg.com/originals/44/2e/34/442e347a3a54a6459ffe331d495557a1.jpg" alt="IMG" width="180" height="160" />
            <div>
              <h3 class="fs-5 mt-4 px-4 pb-1">Pants White Snow</h3>
              <p class="px-4">Un producto pensado para la claridad donde tu objetivo solo es correr 
                transmitiendo energia e inspirar a quien te vea. Remarcando el espiritu</p>
            </div>
          </div>


          <div class="col-lg-6 col-md-12 col-sm-12
          d-flex my-5 icono-wrap">
              <img src="https://i.pinimg.com/originals/44/2e/34/442e347a3a54a6459ffe331d495557a1.jpg" alt="IMG" width="180" height="160"/>
            <div>
              <h3 class="fs-5 mt-4 px-4 pb-1">Adidas & MGT</h3>
              <p class="px-4">La gran union de dos potencia hacen un producto increible. donde nadie lo hubiera imaginado
                donde la sencillez, la elengancia y la calidad pueden sentirse a centimetros de ponerte el pantalon
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12
          d-flex my-5 icono-wrap">
              <img src="https://i.pinimg.com/originals/44/2e/34/442e347a3a54a6459ffe331d495557a1.jpg" alt="IMG" width="180" height="160"/>
            <div>
              <h3 class="fs-5 mt-4 px-4 pb-1">Adidas</h3>
              <p class="px-4">Mano a mano, acompañamos y ayudamos a nuestros socios la posibilidad de que te encuentres
                con los mejores productos como nosotros confiamos y conocemos sus productos, tambien queremos que lleguen a tus manos

              </p>
            </div>
          </div>
          </div>
      </section>
  )
}
