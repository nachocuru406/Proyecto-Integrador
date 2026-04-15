import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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

    
    document.cookie = `user=${email}; path=/`;
    
    localStorage.setItem("user", email);

    this.props.history.push("/");
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">   
        <h1>UdeSA Movies</h1>
        <Header />

        <div className="container my-5">
          <h2>Login</h2>

          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control my-2"
              onChange={(e) => this.handleChange(e)}
            />

            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="form-control my-2"
              onChange={(e) => this.handleChange(e)}
            />

            <button className="btn btn-success">Ingresar</button>

            {this.state.error && (
              <p style={{ color: "red" }}>{this.state.error}</p>
            )}
          </form>
        </div>

        <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Login;