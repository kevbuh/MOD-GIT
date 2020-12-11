import React from "react";
import "../css/Lulu.css";

function Lulu() {
  return (
    <section className="lulu">
      <div className="lulu__left">
        <span className="lulu__leftTextTwo">WHAT'S</span>
        <span className="lulu__leftTextOne">OUR GOAL?</span>
        <span className="lulu__leftTextSmall">
          Here at Modcopters, we are committed to improving your quadcopters.
        </span>
      </div>
      <div className="lulu__right">
        <img
          src="https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          alt="lulu"
          className="lulu__image"
        />
      </div>
    </section>
  );
}

export default Lulu;
