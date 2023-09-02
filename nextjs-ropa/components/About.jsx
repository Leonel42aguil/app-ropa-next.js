import "../app/css/productos.css"
import "../app/css/slider.css"
import "../app/css/style.css"

export default function About() { 
  return (
    <section>
      <div id="equipo" className="w-75 m-auto text-center">
        <h1 className="mb-5 fs-2" id="teams">
          Equipo de emprendedores con una <br />
          <span className="text-primary">Gran visión en las personas y del mañana</span>
        </h1>
        <p className="fs-4">Somos un pequeño grupo o cohorte de personas en el cual necesitamos y queremos brindar y poder ayudar
          a la mayor cantidad de personas a lograr la satisfacción de vestir bien y con calidad, de acuerdo a su gusto y necesidad. Estamos aquí para acompañarte en tu camino hacia el éxito.
        </p>
      </div>

      <section className="testimony">
        <div className="testimony__container container">
          <img src="Images/slider/leftarrow.svg" className="testimony__arrow" id="before" />

          <section className="testimony__body testimony__body--show" data-id="1">
            <div className="testimony__texts">
              <h2 className="subtitle">Mi nombre es Oscar Zavala, <span className="testimony__course">Programador</span></h2>
              <p className="testimony__review">Nacido en Argentina "Tuti", de 20 años, comenzó su carrera como profesional acompañado
                por sus colegas para brindar mejores ideas y funciones al negocio, tanto en la cafetería como en su creatividad para sus outfits de los <b>Privileged</b>.
              </p>
            </div>
            {/* <!-- TUTI ZAVALA--> */}
            <figure className="testimony__picture">
              <img src="https://i.pinimg.com/originals/44/2e/34/442e347a3a54a6459ffe331d495557a1.jpg" className="testimony__img" alt="Tuti Zavala" />
            </figure>
          </section>
          {/* <!--LEONEL--> */}
          <section className="testimony__body" data-id="2">
            <div className="testimony__texts">
              <h2 className="subtitle">Mi nombre es Leonel Aguilera , <span className="testimony__course">estudiante de
                          Henry.</span></h2>
              <p className="testimony__review">Soy una persona que a veces fuma marihuana y hace deporte.
                En el año 2022, comencé con la programación y el buen camino, ya que soy un niño de 15 años.
              </p>
            </div>

            <figure className="testimony__picture">
              <img src="https://i.pinimg.com/originals/44/2e/34/442e347a3a54a6459ffe331d495557a1.jpg" className="testimony__img" alt="Leonel Aguilera" />
            </figure>
          </section>

          <img src="Images/slider/rightarrow.svg" className="testimony__arrow" id="next" />
        </div>
      </section>
    </section>
  );
}
