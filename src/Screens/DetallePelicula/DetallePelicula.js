import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class DetallePelicula extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => this.setState({ pelicula: data }))
      .catch(function(error) {
        console.log("El error fue: " + error);
      });
  }

  render() {
    if (!this.state.pelicula) {
      return <p>Cargando...</p>;
    }

    let pelicula = this.state.pelicula;
    return (
        <div className="container">
          <h1>UdeSA Movies</h1>
          <Header/>
          <h2 className="alert alert-primary">{pelicula.title}</h2>
          <section className="row">
            {pelicula.poster_path && (
              <img
                className="col-md-6"
                src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                alt={pelicula.title}
              />
            )}
            <section className="col-md-6 info">
              <h3>Descripcion</h3>
              <p className="description">{pelicula.overview}</p>
              <p className="mt-0 mb-0"><strong>Fecha de estreno: </strong>{pelicula.release_date}</p>
              <p className="mt-0 mb-0 length"><strong>Duración: </strong>{pelicula.runtime}</p>
              <p className="mt-0"><strong>Puntuación: </strong>{pelicula.vote_average}</p>
            </section>
          </section>
          <Footer/>
        </div>
    );
  }
}

export default DetallePelicula;