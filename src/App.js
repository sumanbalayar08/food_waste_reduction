import React from "react";
import PostFood from "./Screen.js/PostFood";
import ClaimFood from "./Screen.js/ClaimFood";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostFood />} />
        <Route path="/claim" element={<ClaimFood />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
