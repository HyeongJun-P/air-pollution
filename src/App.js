import React from "react";
import ApPage from "./router/ApPage";
import {HashRouter, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Forenoti from "./router/Forenoti";

function App() {
  return <HashRouter>
    <Navigation/>
    <Route exact path="/" component={ApPage}/>
    {/* <Route exact path="/" component={Fn}/> */}
    <Route exact path="/Forenoti" component={Forenoti}/>

  </HashRouter>
}

export default App;