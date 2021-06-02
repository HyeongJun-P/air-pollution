import React from "react";
import ApPage from "./router/ApPage";
import {HashRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Forenoti from "./router/Forenoti";
import PmCity from "./router/PmCity";

function App() {
  return <HashRouter>
    <Navigation/>
    <Route exact path="/" component={ApPage}/>
    <Route exact path="/Forenoti" component={Forenoti}/>
    <Route exact path="/PmCity" component={PmCity}/>
  </HashRouter>
}

export default App;