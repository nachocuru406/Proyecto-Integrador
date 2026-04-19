import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import BuscadorPeliculasSeries from '../../components/BuscadorPeliculasSeries/BuscadorPeliculasSeries';
import SeccionSeries from '../../components/SeccionSeries/SeccionSeries';
import Footer from '../../components/Footer/Footer';


class Series extends Component {
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
                    <h2 className="alert alert-warning">Todas las series</h2>
                </section>
                <section className="text-center my-5">
                    <BuscadorPeliculasSeries/>
                </section>
                <section className = "moviesbutton">
                    <a href="" className="btn btn-warning">Cargar más</a>
                </section>
                <SeccionSeries/>
                <Footer/>
            </div>
        );
    }
}

export default Series;