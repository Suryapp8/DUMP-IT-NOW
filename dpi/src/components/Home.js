import React from "react";
import "../css/Home.css";
import dustbin from "../images/dustbin.png";
import recycle from "../images/recycle.png";
import plant from "../images/plant.png";
import arrow from "../images/arrow.png";
import redo from "../images/redo.png";
import earth from "../images/earth.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="transbox ">
          <h2>Stay Clean Go Green</h2>
          <p>Do you have waste Around you?</p>
          <Link to="/bookslot">
            <button className="bookslot">Dump it now</button>
          </Link>

          <p> become a recycling hero</p>
        </div>
      </div>
      <div className="or">
        <h2>Exchange Your scrap with greenery</h2>
      </div>
      <div className="get-plant">
        <div className="plant-about">
          <p>
            Dont's throw your scrap on our lands instead give it to us and get
            plants for your recycling efforts
          </p>
          <Link to="/plants" ><button className="plants-btn">Get plants</button></Link>
          <div className="all-icons">
            <img src={dustbin} alt="icons" />
            <img src={arrow} alt="icons" />
            <img src={recycle} alt="icons" />
            <img src={arrow} alt="icons" />
            <img src={plant} alt="icons" />
          </div>
        </div>
      </div>

      <div className="last-about">
        <img src={earth} alt="earth" />
        <div className="container-last-about">
          <h2>
            Stop throwing{" "}
            <span>
              <img className="redo" src={redo} alt="arrow" />
            </span>{" "}
            start collecting
          </h2>
          <h3>Be a part of our green earth mission</h3>
          <p>
            Becoma a part of of 0% plastic emission mission - try to give us
            every piece of plastic which comes to your house, make sure every
            piece of plasticis recycled and give contribution to control
            <ul>
              <li>Soil pollution</li>
              <li>air pollution</li>
              <li>water pollution</li>
            </ul>
            as per reports, india generates around 3.4 million tonnes of plastic
            waste and barely 30% of its recycled. and to add to it not only
            plastic usage is increasing exponentially the recycling process is
            declining heavily.
            <br />
            We urge you to join us and turn this cycle up-side down, welcoming
            you all recycling heroesto do your parts
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
