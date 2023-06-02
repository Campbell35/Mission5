import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import PropertySearchPage from "./pages/PropertySearchPage";

function App() {
  return (
    <>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Property" element={<PropertySearchPage />} />
    </Routes>
    </>
  );
}

export default App;
