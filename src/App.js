import React from "react";
import ApPage from "./router/ApPage";
import {HashRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Fn from "./components/Fn";

function App() {
  return <HashRouter>
    <Navigation/>
    <Route exact path="/" component={ApPage}/>
    <Route exact path="/Forenoti" component={Fn}/>

  </HashRouter>
}

export default App;