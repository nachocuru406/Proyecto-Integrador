import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      error: ""
    };
  }
  controlarCambiosUN(event) {
    this.setState({
      username: event.target.value
    });
  }
  controlarCambiosE(event) {
    this.setState({
      email: event.target.value
    });
  }
  controlarCambiosP(event) {
    this.setState({
      password: event.target.value
    });
  }
  submit(event) {
    event.preventDefault();
    let usuarioACrear = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      createdAt: Date.now()
    };
    if (this.state.username.length < 3 || this.state.username.length > 7) {
      this.setState({
        error: "La extensión del username debe ser de 3 a 7 caracteres"
      });
      return;
    }
    if (this.state.password.length < 5 || this.state.password.length > 12) {
      this.setState({
        error: "La contraseña debe tener un mínimo de 6 caracteres"
      });
      return;
    }
    let usersStorage = localStorage.getItem("users");
    if (usersStorage != null) {
      let usersParseado = JSON.parse(usersStorage);
      let usersFiltrado = usersParseado.filter(function (usuario) {
        return usuario.email === usuarioACrear.email;
      });
      if (usersFiltrado.length > 0) {
        this.setState({
          error: "Ya existe un usuario con el email ingresado"
        });
        return;
      } else {
        usersParseado.push(usuarioACrear);
        let usuarioJson = JSON.stringify(usersParseado);
        localStorage.setItem("users", usuarioJson); 
        cookies.set("user-auth-cookie", this.state.email, { path: "/" });
        this.props.history.push("/login");
      }
    } else {
      let usersInicial = [usuarioACrear];
      let usersEnJson = JSON.stringify(usersInicial);
      localStorage.setItem("users", usersEnJson);
      cookies.set("user-auth-cookie", this.state.email, { path: "/" });
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div className="container">
        <h1>UdeSA Movies</h1>
        <Header/>
        <h2 className="alert alert-primary">Registro</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(event) => this.submit(event)}>
              <div className="form-group">
                <label>Nombre de usuario:</label>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Ingresá tu nombre"
                  onChange={(event) => this.controlarCambiosUN(event)}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  value={this.state.email}
                  placeholder="Ingresá tu email"
                  onChange={(event) => this.controlarCambiosE(event)}
                />
              </div>
              <div className="form-group">
                <label>Contraseña:</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={this.state.password}
                  placeholder="Ingresá tu contraseña"
                  onChange={(event) => this.controlarCambiosP(event)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Registrarse</button>
              {this.state.error !== "" ? (
                <p className="mt-3 text-danger">{this.state.error}</p>
              ) : null}
            </form>
            <p className="mt-3 text-center">¿Ya tenés cuenta?<Link to="/login"> Iniciar sesión</Link></p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Registro;