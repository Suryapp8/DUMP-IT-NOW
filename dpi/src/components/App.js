import "../css/App.css";
import Footer from "./Footer";
import Home from "./Home";
import Mission from "./Mission";
import Navbar from "./Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import OrderPage from "./OrderPage";
import PlantPage from "./PlantPage";
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
