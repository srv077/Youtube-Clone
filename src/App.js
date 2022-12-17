import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchpage from "./Searchpage";
import Home from "./Home";
import { SearchBar } from "./components";
import VideoItem from "./components/VideoItem";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route index  element={<Home />} />
         <Route path='s' element={<Searchpage />} />
      </Routes>
    </BrowserRouter>
  );
}


