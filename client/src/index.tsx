import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const dark = createTheme({
  palette: {
    type: "dark",
  }
});

const drafting = createTheme({
  palette: {
    type: "dark",
    secondary: {
      main: '#282C34',
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme = {drafting}> 
      <App />
    </ThemeProvider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
