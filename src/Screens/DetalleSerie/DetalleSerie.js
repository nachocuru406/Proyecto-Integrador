import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class DetalleSerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const apiKey = "8ec38789ad70cc9e9d12c6e963cc77be";

    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => this.setState({ serie: data }))
      .catch(function(error) {
        console.log("El error fue: " + error);
      });
  }

  render() {
    if (!this.state.serie) {
      return <p>Cargando...</p>;
    }

    let serie = this.state.serie;
    return (
        <div className="container">
          <h1>UdeSA Movies</h1>
          <Header/>

          <h2 className="alert alert-warning">{serie.name}</h2>

          <section className="row">
            <section className="col-md-6 info">
              <h3>Descripcion</h3>
              <p className="description">{serie.overview}</p>
              <p className="mt-0 mb-0"><strong>Fecha de estreno: </strong>{serie.fist_air_date}</p>
              <p className="mt-0 mb-0 length"><strong>Duración: </strong>{serie.episode_run_time}</p>
              <p className="mt-0"><strong>Puntuación: </strong>{serie.vote_average}</p>
            </section>
            {serie.poster_path && (
              <img
                className="col-md-6"
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.title}
              />
            )}
          </section>

          <Footer/>
        </div>
    );
  }
}

export default DetalleSerie;