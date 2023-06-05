import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertySearchPage from "./pages/PropertySearchPage";
import Application from "./pages/ApplicationPage";

function App() {
  return (
    <>
    <Routes>
         <Route path="/Property" element={<PropertySearchPage />} />
         <Route path="/Application" element={<Application />} />
    </Routes>
    </>
  );
}

export default App;
