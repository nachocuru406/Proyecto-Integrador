import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import SearchResults from "./Screens/SearchResults/SearchResults";
import Peliculas from "./Screens/Peliculas/Peliculas";
import Series from "./Screens/Series/Series";
import Registro from "./Screens/Registro/Registro"
import Login from "./Screens/Login/Login";
import DetallePelicula from "./Screens/DetallePelicula/DetallePelicula";
import DetalleSerie from "./Screens/DetalleSerie/DetalleSerie";
import NotFound from "./Screens/NotFound/NotFound";



function App() {
  return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home}/>
          <Route path="/search/:query" component={SearchResults}/>
          <Route path="/Peliculas" component={Peliculas}/>
          <Route path="/Series" component={Series}/>
          <Route path="/Registro" component={Registro}/>
          <Route path="/Login" component={Login}/>
          <Route path="/pelicula/:id" component={DetallePelicula}/>
          <Route path="/serie/:id" component={DetalleSerie}/>
          <Route component={NotFound}/>
        </Switch>
  );
}

export default App;