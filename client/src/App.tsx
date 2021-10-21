import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Demo from "./components/demo";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

let backgrounds = [
  "https://i.imgur.com/DRM6nkf.jpg",
  "https://i.imgur.com/bpfDOdt.jpg",
  "https://i.imgur.com/E39KyrA.jpg"
]

const useStyles = makeStyles((theme) => ({
  bg: {
    webkitBackgroundSize: "cover",
    mozBackgroundSize: "cover",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    backgroundImage: `url(${backgrounds[Math.floor(Math.random()*backgrounds.length)]})`,
    padding: "20px"
  }
}));

function App() {
  const styles = useStyles();
  return (
    <div className="App">
      <div className={styles.bg}>
      <Route exact path="/SignIn" component={SignIn}></Route>
      <Route exact path="/SignUp" component={SignUp}></Route>
      <Route exact path="/">
        Valorant Fantasy App
        <Demo />
      </Route>
      </div>
    </div>
  );
}

export default App;
