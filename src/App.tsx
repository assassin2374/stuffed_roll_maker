import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Preview from "./view/Preview";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
