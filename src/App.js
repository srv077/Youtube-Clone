import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchpage from "../src/components/Searchpage.js";
import Home from "./Home";
import CopyHome from "./components/CopyHome"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route index path="/" element={<Home />} />
         <Route  path="/search" element={<Searchpage />} />
         <Route  path="/cp" element={<CopyHome/>} />
         <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


