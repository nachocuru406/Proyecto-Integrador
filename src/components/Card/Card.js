import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Card(props) {
  let haySesion = cookies.get("user-auth-cookie");
  let botonFavorito = null;
  if (haySesion) {
    botonFavorito = (
      <button className="btn alert-primary">❤</button>
    );
  }

  return (
    <article className="single-card-movie">
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="cardBody">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={`/${props.type}/${props.id}`} className="btn btn-primary">Ver más</Link>
        {botonFavorito}
      </div>
    </article>
  );
}

export default Card;