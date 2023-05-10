import React, { useState, useEffect } from "react";
import "../css/PlantPage.css";
import { plants } from "../data/plantData.js";
import Loading from "./Loading";
function PlantPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div>
          <div className="">
            <h2 className="offering-plants">
              Plants we Are offering in exhange:{" "}
            </h2>
          </div>
          <div className="plants">
            {plants.map((plant, index) => (
              <div className="plant-card" key={index}>
                <img className="plant-img" src={plant.image} alt="plant-img" />
                <h3>{plant.name}</h3>
                <p>{plant.about}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default PlantPage;
