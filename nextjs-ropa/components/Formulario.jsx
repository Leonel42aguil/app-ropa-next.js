import "../app/css/productos.css"
import "../app/css/slider.css"
import "../app/css/style.css" 

export default function Formulario() {
  return (
    <section id="seccion-contacto" className="border-bottom border-dark border-4">
      <div id="bg-contacto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1b2a4e" fillOpacity="1" d="M0,32L0,160L36.9,160L36.9,160L73.8,160L73.8,192L110.8,192L110.8,64L147.7,64L147.7,224L184.6,224L184.6,128L221.5,128L221.5,160L258.5,160L258.5,160L295.4,160L295.4,32L332.3,32L332.3,96L369.2,96L369.2,32L406.2,32L406.2,160L443.1,160L443.1,32L480,32L480,288L516.9,288L516.9,320L553.8,320L553.8,0L590.8,0L590.8,224L627.7,224L627.7,256L664.6,256L664.6,64L701.5,64L701.5,256L738.5,256L738.5,160L775.4,160L775.4,64L812.3,64L812.3,160L849.2,160L849.2,160L886.2,160L886.2,64L923.1,64L923.1,0L960,0L960,320L996.9,320L996.9,192L1033.8,192L1033.8,96L1070.8,96L1070.8,32L1107.7,32L1107.7,224L1144.6,224L1144.6,256L1181.5,256L1181.5,256L1218.5,256L1218.5,64L1255.4,64L1255.4,320L1292.3,320L1292.3,32L1329.2,32L1329.2,64L1366.2,64L1366.2,64L1403.1,64L1403.1,320L1440,320L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path>
        </svg>
      </div>

      {/* FORMULARIO INPUTS */}
      <div className="a222" id="contenedor-formulario">
        <div id="titulo-formulario" className="text-center mb-4">
          <div><img src="Images/support.png" alt="contacto" className="img-fluid" /></div>
          <h2>Contactos</h2>
          <p className="fs-5">Estamos aquí para hacer realidad tus proyectos</p>
        </div>

        <form action="">
          <div className="mb-3">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
          </div>

          <div className="mb-3">
            <input type="text" className="form-control" id="nombre" placeholder="Your name" required />
          </div>

          <div className="mb-3">
            <input type="tel" className="form-control" id="tel" placeholder="+54 261000150" required />
          </div>

          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message here" required></textarea>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100 fs-5" id="sendss">Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
