import React from "react";
import Sidebar from "./Sidebar";
import FavouritesBody from "./FavouritesBody";
const Favourites = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <FavouritesBody/>
      </div>
    </>
  );
};

export default Favourites;
