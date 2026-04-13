import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Buscador from '../../components/Buscador/Buscador';
import SeccionSeriesPopulares from '../../components/SeccionSeriesPopulares/SeccionSeriesPopulares';
import Footer from '../../components/Footer/Footer';


class Series extends Component {
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
                    <div className="col-md-8">
                    </div>
                </section>

                <section className="my-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="h3">Todas las series</h2>
                    </div>
                    <SeccionSeriesPopulares/>
                </section>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Series;