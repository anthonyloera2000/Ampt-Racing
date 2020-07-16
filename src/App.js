import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./header";
import Slideshow from "./slideshow";
import Contact from "./Contact";
import Homepage from "./Homepage";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#8B4513",
      },
    },
  },
});

function view() {
  return (
    <div>
      <Slideshow />
      <Contact />
    </div>
  );
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={Homepage} exact path="/" />
          <Route component={Contact} exact path="/contact-us" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
