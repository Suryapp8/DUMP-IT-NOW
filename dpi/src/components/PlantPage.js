import React from "react";
import "../css/PlantPage.css";
import { plants } from "../data/plantData.js";

function PlantPage() {
  return (
    <>
    <div className="">
    <h2 className="offering-plants">Plants we Are offering in exhange: </h2>
    </div>
    <div className="plants">
        
      {plants.map((plant) => (
        <div className="plant-card">
          <img className="plant-img" src={plant.image} alt="plant-img" />
          <h3>{plant.name}</h3>
          <p>{plant.about}</p>
        </div>
      ))}
    </div>

    </>
  );
}

export default PlantPage;
