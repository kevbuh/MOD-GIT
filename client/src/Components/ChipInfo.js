import React from "react";
import "../css/ChipInfo.css";

function ChipInfo() {
  return (
    <section className="originalproduct">
      <div className="originalproduct__left">
        <div className="originalproduct__info">
          <span>
            Running on the WLED software and ESP8266 Microchip, THE MODCOPTER DRONE IS PERFECT FOR AN AFFORDABLE AERIAL EXPERIENCE.
          </span>
        </div>
      </div>

      <div className="originalproduct__right">
        <img
          className="originalproduct__img"
          src="https://www.allegromicro.com/-/media/images/products/8503/a8503-product-image.ashx"
          alt="."
        />
      </div>
    </section>
  );
}

export default ChipInfo;
