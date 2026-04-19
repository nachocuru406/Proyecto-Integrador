import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Favoritas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritas: []
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("favoritas")) || [];
    this.setState({ favoritas: data });
  }

  eliminarFavorito(id) {
    let nuevas = this.state.favoritas.filter(fav => fav.id !== id);
    localStorage.setItem("favoritas", JSON.stringify(nuevas));
    this.setState({ favoritas: nuevas });
  }

  render() {
    let haySesion = cookies.get("user-auth-cookie");
    if (!haySesion) {
      return <p>No tenés acceso. Iniciá sesión.</p>;
    }
    let peliculas = this.state.favoritas.filter(f => f.type === "movie");
    let series = this.state.favoritas.filter(f => f.type === "tv");

    return (
      <div className="container">
        <h1>UdeSA Movies</h1>
        <Header/>
        <h2 className="alert alert-primary">Películas Favoritas</h2>
        <div className="row">
          {peliculas.length > 0 ? (
            peliculas.map(p => (
              <div className="col-md-3" key={p.id}>
                <img src={p.image} alt={p.title} className="img-fluid" />
                <h5>{p.title}</h5>
                <Link to={`/movie/${p.id}`} className="btn btn-primary">Ver más</Link>
                <button className="btn btn-danger mt-2" onClick={() => this.eliminarFavorito(p.id)}>Eliminar</button>
              </div>
            ))
          ) : (
            <p>No hay películas favoritas</p>
          )}
        </div>
        <h2 className="alert alert-warning mt-4">Series Favoritas</h2>
        <div className="row">
          {series.length > 0 ? (
            series.map(s => (
              <div className="col-md-3" key={s.id}>
                <img src={s.image} alt={s.title} className="img-fluid" />
                <h5>{s.title}</h5>
                <Link to={`/serie/${s.id}`} className="btn btn-primary">Ver más</Link>
                <button className="btn btn-danger mt-2" onClick={() => this.eliminarFavorito(s.id)}>Eliminar</button>
              </div>
            ))
          ) : (
            <p>No hay series favoritas</p>
          )}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Favoritas;