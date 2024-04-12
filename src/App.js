import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from './pages/Shop/Shop'
import Cart from './pages/Cart/Cart'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>

      <Route path="/" element={<Shop/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>

    
      </BrowserRouter>
    </div>
  );
}

export default App;
