import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
        valor: ''
    };
  }
  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push(`/search/${this.state.valor}`);
  }
  controlarCambios(event) {
    this.setState({valor: event.target.value});
  }

  render() {
    return (
    <form className="search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
        <input type="text" placeholder="Buscar..." onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
        <button className="btn btn-success btn-sm" type="submit"> Buscar </button>
    </form>
    );
  }
}


export default withRouter(Buscador);