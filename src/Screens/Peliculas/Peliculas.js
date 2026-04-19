import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import BuscadorPeliculasSeries from '../../components/BuscadorPeliculasSeries/BuscadorPeliculasSeries';
import SeccionPeliculas from '../../components/SeccionPeliculas/SeccionPeliculas.js';
import Footer from '../../components/Footer/Footer';


class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        return (
            <div className='container'>
                <h1>UdeSA Movies</h1>
                <Header/>
                <section className="my-5">
                    <h2 className="alert alert-primary">Todas las películas</h2>
                </section>
                <section className="text-center my-5">
                    <BuscadorPeliculasSeries/>
                </section>
                <section className = "moviesbutton">
                    <a href="" className="btn btn-primary">Cargar más</a>
                </section>
                <SeccionPeliculas/>
                <Footer/>
            </div>
        );
    }
}

export default Peliculas;