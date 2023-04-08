import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";
import NavBar from "../Navigation/NavBar";
import "./home.scss";

export default function Home() {
  const username = JSON.parse(localStorage.getItem("username"));

  useEffect(() => {
    new Typewriter("#typewriter", {
      strings: username,
      autoStart: true,
      loop: true,
      delay: 200,
      deleteSpeed: 200,
    });
  }, []);
  return (
    <div className="container-fluid">
      <NavBar username={username} />
      <div className="welcome">
        <h3>
          Welcome <span id="typewriter"></span>
        </h3>
      </div>
    </div>
  );
}
