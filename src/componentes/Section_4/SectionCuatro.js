import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          ¿Cuánto dinero me dais por vender plata en{" "}
          <span className={styles.linea}>Barcelona?</span>
        </h2>
        <p>
          En Quickgold Barcelona compramos todo tipo de piezas de plata. Ya sean
          joyas, monedas, elementos de decoración, cuberterías o lingotes. Ven a
          nuestra tienda y obtén dinero en efectivo al instante por ellas.
          Garantizamos el mejor precio de la plata en Barcelona siempre con una
          tasación a la vista y una comprobación específica para este metal.
          Llámanos sin compromiso y fija tu precio. Mejor servicio y precio por
          kilo garantizado.
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/casa-cambio-barcelona.webp"
          alt="Compro plata Barcelona"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
