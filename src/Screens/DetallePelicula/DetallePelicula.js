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
    const API_KEY = "c183e27f4cd7ef72ce91a2388fa9e5ac";

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => this.setState({ pelicula: data }))
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.pelicula) {
      return <p>Cargando...</p>;
    }

    let pelicula = this.state.pelicula;

    return (
      <>
        <div className="container">
          <h1>UdeSA Movies</h1>
          <Header />

          <h2>{pelicula.title}</h2>

          {pelicula.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
              alt={pelicula.title}
            />
          )}

          <p>{pelicula.overview}</p>
          <p>Rating: {pelicula.vote_average}</p>

          <Footer />
        </div>
      </>
    );
  }
}

export default DetallePelicula;