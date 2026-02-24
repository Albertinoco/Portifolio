import React from "react";
import detalhes from "../detalhes.js";
import "../style/style.css";

function Carts({ categoria }) {
  const filteredDetalhes = categoria === 'All' ? detalhes : detalhes.filter(item => item.category === categoria);

  return (
    <div className="cards_loja">
      {filteredDetalhes.map((item) => (
        <div key={item.id} className="card">
          <img src={item.imagUrl} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span>{item.price}</span>
          <div className="btn_card">
            <button className="btn-category">add</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carts;
