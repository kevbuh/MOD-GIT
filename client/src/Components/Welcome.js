import React from "react";
import "../css/HomeScreen.css";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <section className="homescreen">
      <div className="homescreen__info">
        <div className="homescreen__logo">
          <h1>MODCOPTERS</h1>
          <h2 className="homescreen__logoInfo"> Modding Mainstream Drones</h2>
        </div>
        <div className="homescreen__button">
          <Link to="/shop" className="homescreen__buttonField">
            VIEW MORE
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeScreen;
