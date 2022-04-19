import React, { useEffect, useState } from "react";
import Destination from "../Destination/Destination";

import "./Destinations.css";

const Destinations = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("https://warm-reaches-47554.herokuapp.com/place")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCities(data);
      });
  }, []);
  return (
    <div className="my-5">
      <p>
        <small>Modern & Beautiful</small>
      </p>
      <h1>Explore the World for Yourself</h1>
      <div className="carts">
        {cities.map((state) => (
          <Destination key={state.id} state={state}></Destination>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
