import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Buscador from '../../components/Buscador/Buscador';
import SeccionPeliculasPopulares from '../../components/SeccionPeliculasPopulares/SeccionPeliculasPopulares';
import SeccionPeliculasActuales from '../../components/SeccionPeliculasActuales/SeccionPeliculasActuales'
import SeccionSeriesPopulares from '../../components/SeccionSeriesPopulares/SeccionSeriesPopulares';
import SeccionSeriesActuales from '../../components/SeccionSeriesActuales/SeccionSeriesActuales';
import Footer from '../../components/Footer/Footer';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>UdeSA Movies</h1>
                <Header/>

                <section className="text-center my-5">
                    <Buscador/>
                </section>

                <section className="my-5">
                    <h2 className="alert alert-primary">Popular movies this week</h2>
                    <SeccionPeliculasPopulares/>
                </section>

                <section className="my-5">
                    <h2 className="alert alert-primary">Movies now playing</h2>
                    <SeccionPeliculasActuales/>
                </section>

                <section className="my-5">
                    <h2 className="alert alert-warning">Popular TV shows this week</h2>
                    <SeccionSeriesPopulares/>
                </section>

                <section className="my-5">
                    <h2 className="alert alert-warning">TV shows airing today</h2>
                    <SeccionSeriesActuales/>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;