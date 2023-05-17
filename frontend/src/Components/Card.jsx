import React, { useState } from "react";
import "../App.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (props) => {
  const [isFavorite, setIsFavorite] = useState(props.favourite);

  const handleAddToFavorites = () => {
    toast.success("Added to favorites");
  };
  const handleRemoveFromFavorites = () => {
    // ...other code
    toast.error("Removed from favorites!");
  };

  const handleClick = () => {
    
    setIsFavorite(!isFavorite);
    
    if (!isFavorite) {
      handleAddToFavorites();
    } else {
      handleRemoveFromFavorites();
    }
  };


  return (
    <div className="card">
      <img src={props.pic} alt="pic1" className="card-pic" />
      <h3 className="category">{props.category}</h3>
      <div className="wrap">
        <h2 className="card-header">{props.heading}</h2>
        <FavoriteIcon
          className="love"
          style={{ fill: isFavorite ? "#8952ed" : "rgb(200, 200, 200)" }}
          onClick={handleClick}
        />
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Card;
