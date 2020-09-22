import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Perfil from "./Perfil";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/perfil" component={Perfil} />
    </Switch>
  );
}
