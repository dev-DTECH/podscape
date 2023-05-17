import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favourites from "./Components/Favourites";
import Home from "./Components/Home";
import "./App.css";

function App() {
  // const [liked, setLiked] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route path="/favourites" element={<Favourites></Favourites>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
