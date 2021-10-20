import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Demo from "./components/demo";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Route exact path="/SignIn" component={SignIn}></Route>
      <Route exact path="/SignUp" component={SignUp}></Route>
      <Route exact path="/">
        Valorant Fantasy App
        <Demo />
      </Route>

    </div>
  );
}

export default App;
