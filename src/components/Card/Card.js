import React from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Card(props) {
  let haySesion = cookies.get("user-auth-cookie");
  function agregarFavorito() {
    let favoritos = JSON.parse(localStorage.getItem("favoritas")) || [];
    let existe = favoritos.find(f => f.id === props.id);
    if (!existe) {
      favoritos.push({
        id: props.id,
        type: props.type,
        title: props.title,
        image: props.image,
        description: props.description
      });
      localStorage.setItem("favoritas", JSON.stringify(favoritos));
    }
  }
  let botonFav = null;
  if (haySesion) {
    botonFav = (
      <button className="btn btn-outline-danger"onClick={agregarFavorito}>❤️</button>
    );
  }

  return (
    <article className="single-card-movie">
      <img
        src={props.image}
        className="card-img-top"
        alt={props.title}
      />
      <div className="cardBody">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Link to={`/${props.type}/${props.id}`} className="btn btn-primary">Ver más</Link>
        {botonFav}
      </div>
    </article>
  );
}

export default Card;