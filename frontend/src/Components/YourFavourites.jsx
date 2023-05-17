import React from "react";
import Card from "./Card";
import pic1 from "../images/pic1.jpeg";
const YourFavourites = () => {
  return (
    <>
      <h3 className="new-release">Your Favourites</h3>
      <Card
        pic={pic1}
        category={"Horror and Adventure"}
        heading={"Sunday Suspense"}
      />
    </>
  );
};

export default YourFavourites;
