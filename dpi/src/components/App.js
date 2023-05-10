import "../css/App.css";
import Footer from "./Footer";
import Home from "./Home";
import Mission from "./Mission";
import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPage from "./OrderPage";
import PlantPage from "./PlantPage";
import Valuate from "./Valuate";
import About from "./About";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div className="App">
      {loading === false ? (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="mission" element={<Mission />} />
            <Route exact path="bookslot" element={<OrderPage />} />
            <Route exact path="plants" element={<PlantPage />} />
            <Route exact path="valuate" element={<Valuate />} />
            <Route exact path="about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
