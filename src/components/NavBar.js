import React from "react";
import {nanoid} from 'nanoid'

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
    <a id={nanoid()} href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
  </nav>
  );
}

export default NavBar;
