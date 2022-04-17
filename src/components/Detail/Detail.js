import React from "react";
import "./Detail.css";

const Detail = () => {
  return (
    <div>
      <h1 className="my-5">
        Why You Are Travel With <br /> Us
      </h1>
      <div className="reviwe">
        <div className="icon">
          <i className="fa-solid fa-handshake-simple "></i>
          <p>100% trusted travel agency</p>
        </div>
        <div className="icon">
          <i className="fa-solid fa-compass"></i>
          <p>10+ year of travel experience</p>
        </div>
        <div className="icon">
          <i className="fa-solid fa-person-walking-luggage"></i>
          <p>90% of our traveller happy</p>
        </div>
        <div className="icon">
          <i className="fa-solid fa-map"></i>
          <p>2000+ Our worldwide guide</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
