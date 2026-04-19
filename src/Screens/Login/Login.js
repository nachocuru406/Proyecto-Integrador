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

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      cookies.set("user-auth-cookie", user.email, {
        path: "/"
      });

      this.props.history.push("/");
    } else {
      this.setState({ error: "Usuario o contraseña incorrectos" });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>UdeSA Movies</h1>
        <Header />

        <h2 className="alert alert-primary">Iniciar sesión</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="form-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={(e) => this.handleChange(e)}
                />
              </div>

              <button className="btn btn-primary">Iniciar sesión</button>

              <p className="mt-3 text-center">¿No tenés cuenta?<Link to="/Registro"> Registrarse</Link></p>

              {this.state.error && (
                <p style={{ color: "red" }}>{this.state.error}</p>
              )}
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;