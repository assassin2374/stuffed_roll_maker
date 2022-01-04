import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import "./App.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
