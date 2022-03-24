import React, { useState } from "react";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import RemotePage from "./Pages/RemotePage.js";
import GuidePage from "./Pages/GuidePage.js"

import "./stylesheets/main.css";

function App() {

  return (
    <div className="App">
      <Routes >
         <Route path="/Web-Remote" index element={<RemotePage />}></Route>
         <Route path="/Web-Remote/Guide" element={<GuidePage />}></Route>
       </Routes>
    </div>
  );
}

export default App;
