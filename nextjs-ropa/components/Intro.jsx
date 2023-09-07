import "../app/css/productos.css"
import "../app/css/slider.css"
import "../app/css/style.css"

const Intro = () => {
  return (
    <section className="container text-center py-4" id="intro">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="display-4 pb-3">
            Bienvenido a todos nuestros productos
            <br />
            <span className="text-primary">ERES LIBRE</span>
          </h1>
          <p className="lead">
            <span className="text-success">VERANO 2023</span> Pequeña introducción a nuestro catálogo
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;


