import React from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';

function Home() {
  return (
    <>
      <Link to="/sobre"> Sobre</Link>
      <br />
      <Link to="/perfil"> Perfil</Link>
    </>
  );
}

export default Home;
