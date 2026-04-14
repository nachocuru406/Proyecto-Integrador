import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Screens/Home/Home";
import SearchResults from "./Screens/SearchResults/SearchResults";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search/:query" component={SearchResults} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;