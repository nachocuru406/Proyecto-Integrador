import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            haySesion: false
        }
    }
    render() {
    return (
         <nav>
            <ul className = "nav nav-tabs my-4">
                <li className   = "nav-item">
                    <Link className = "nav-link" to = "/home">Home</Link>
                </li>
                <li className = "nav-item">
                    <Link className = "nav-link" to = "/peliculas">Peliculas</Link>
                </li>
                <li className = "nav-item">
                    <Link className = "nav-link" to = "/series">Series</Link>
                </li>
                {this.state.haySesion ?
                <li className = "nav-item">
                    <Link className = "nav-link" to = "/favoritas">Favoritas</Link>
                </li>
                : null}
                {!this.state.haySesion ? 
                <li className = "nav-item ml-auto">
                    <Link className = "nav-link" to = "/registro">Registro</Link>
                </li>
                : null}
                {!this.state.haySesion ?
                <li className = "nav-item">
                   <Link className = "nav-link" to = "/login">Login</Link>
                </li>
                : null}
            </ul>
        </nav>
    )
  }
}

export default Header;