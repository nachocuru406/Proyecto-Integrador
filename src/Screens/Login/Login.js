import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;

    if (email === "" || password === "") {
      this.setState({ error: "Completa todos los campos" });
      return;
    }
    
    localStorage.setItem("user", email);

    this.props.history.push("/");
  }

  render() {
    return (
      <div className="container">   
        <h1>UdeSA Movies</h1>
        <Header/>

        <h2 className="alert alert-primary">Iniciar sesión</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Ingresá tu email"
                className="form-control"
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                placeholder="Ingresá tu contraseña"
                className="form-control"
                onChange={(e) => this.handleChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Iniciar sesión</button>

            <p className="mt-3 text-center">¿No tenés cuenta?<Link to="/Registro"> Registrarse</Link></p>

            {this.state.error && (
              <p style={{ color: "red" }}>{this.state.error}</p>
            )}
          </form>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default Login;