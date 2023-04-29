import React, { useState } from "react";
import "../css/OrderPage.css";
import { firestore } from "../firebase/firebase.js";
import { addDoc, collection } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

function OrderPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [pickupdate, setPickupdate] = useState();
  const [pickUpTime, setPickUpTime] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const ref = collection(firestore, "user-pick-up-details");
    let data = {
      user,
      email,
      phone,
      address,
      pickupdate,
      pickUpTime,
      createdAt: new Date(),
    };

    try {
      addDoc(ref, data);
      alert("Congratulations! Your pick up has been scheduled.");
    } catch (err) {
      console.log(err);
    }
    navigate("/");
  }

  const handleName = (e) => {
    setUser(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handlePickUpDate = (e) => {
    setPickupdate(e.target.value);
  };
  const handlePickUpTime = (e) => {
    setPickUpTime(e.target.value);
  };
  return (
    <div className="orderpage">
      <form onSubmit={handleSubmit} className="form">
        <div className="name">
          <h3>Name:</h3>
          <input
            type="name"
            placeholder="Enter your name"
            required
            name="user"
            onChange={handleName}
          />
        </div>
        <div className="name">
          <h3>Email:</h3>
          <input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            onChange={handleEmail}
          />
        </div>
        <div className="name">
          <h3>Phone:</h3>
          <input
            type="number"
            placeholder="Enter your phone number"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            name="phone"
            onChange={handlePhone}
          />
        </div>
        <div className="name">
          <h3>address:</h3>
          <input
            type="name"
            placeholder="Enter your address"
            required
            name="address"
            onChange={handleAddress}
          />
        </div>
        <div className="name">
          <h3>Pick up date:</h3>
          <input
            type="date"
            placeholder="Enter your name"
            required
            name="pickupdate"
            onChange={handlePickUpDate}
          />
        </div>
        <div className="name">
          <h3>Pick up time:</h3>
          <input
            type="time"
            placeholder="Enter your name"
            required
            name="pickUpTime"
            onChange={handlePickUpTime}
          />
        </div>
        <div className="button-div">
          <button className="schedule">Schedule pickup</button>
        </div>
      </form>
    </div>
  );
}

export default OrderPage;
