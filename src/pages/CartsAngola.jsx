import React from "react";
import detalhesAngola from "../detalhesAngola.js";
import styles from "../style/styleAngola.module.css";

function CartsAngola({ service, aoAbrirFrom }) {
  const filtro =
    service === "AllCart"
      ? detalhesAngola
      : detalhesAngola.filter((item) => item.name === service);
  return (
    <div className={styles.service_cart}>
      {filtro.map((item) => (
        <div key={item.id} className={styles.idCard}>
          <img src={item.imgUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>

          <ul className={styles.topics_list}>
            {item.topics.map((topico, index) => (
              <li key={index}>
                <i className="fa-regular fa-circle-check"></i>
                {topico}
              </li>
            ))}
          </ul>

          <button
            className={styles.btn_categor}
            onClick={() => aoAbrirFrom(item.name)}
          >
            Request Assistance
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartsAngola;
