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

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="App">
      {loading === false ? (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="Mission" element={<Mission />} />
            <Route exact path="bookslot" element={<OrderPage />} />
            <Route exact path="plants" element={<PlantPage />} />
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
