import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
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
    if (this.state.email === "" || this.state.password === "") {
      this.setState({ error: "Debes completar todos los campos" });
      return;
    }
    if (!this.state.email.includes("@")) {
      this.setState({ error: "Email mal formateado" });
      return;
    }
    let usersStorage = localStorage.getItem("users");
    if (usersStorage != null) {
      let usersParseado = JSON.parse(usersStorage);
            let usuarioEncontrado = usersParseado.filter((usuario) => {
        return usuario.email === this.state.email && usuario.password === this.state.password;
      });
      if (usuarioEncontrado.length > 0) {
        cookies.set("session", this.state.email, { path: "/" });
        this.props.history.push("/");
      } else {
        this.setState({ error: "Credenciales inválidas" });
      }
    } else {
      this.setState({ error: "No existen usuarios registrados" });
    }
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <h2 className="alert alert-primary">Iniciar sesión</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(event) => this.submit(event)}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresá tu email"
                  value={this.state.email}
                  onChange={(event) => this.controlarCambiosE(event)}
                />
              </div>
              <div className="form-group">
                <label>Contraseña:</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingresá tu contraseña"
                  value={this.state.password}
                  onChange={(event) => this.controlarCambiosP(event)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
              {this.state.error !== "" ? (
                <p className="mt-3 text-danger">{this.state.error}</p>
              ) : null}
            </form>
            <p className="mt-3 text-center">¿No tenés cuenta?<Link to="/Registro"> Registrarse</Link></p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Login;