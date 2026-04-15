import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: "",
      success: ""
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
      this.setState({ error: "Completa todos los campos", success: "" });
      return;
    }


    let usuarios = localStorage.getItem("users");
    usuarios = usuarios ? JSON.parse(usuarios) : [];

   
    let existe = usuarios.find(user => user.email === email);

    if (existe) {
      this.setState({
        error: "El usuario ya existe",
        success: ""
      });
      return;
    }

  
    let nuevoUsuario = {
      email: email,
      password: password
    };

    usuarios.push(nuevoUsuario);

 
    localStorage.setItem("users", JSON.stringify(usuarios));

    this.setState({
      success: "Usuario registrado correctamente",
      error: "",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="container">
        <h1>UdeSA Movies</h1>
        <Header />

        <div className="my-5">
          <h2>Registro</h2>

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control my-2"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="form-control my-2"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />

            <button className="btn btn-success">Registrarse</button>
            <p className="text-center mt-3">
                ¿Ya tenés cuenta?{" "}
                <Link to="/Login">Iniciar sesión</Link>
            </p>

            {this.state.error && (
              <p style={{ color: "red" }}>{this.state.error}</p>
            )}

            {this.state.success && (
              <p style={{ color: "green" }}>{this.state.success}</p>
            )}
          </form>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Registro;