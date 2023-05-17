import React from "react";
import "../App.css";
import SingRecommend from "./singRecommend";
const recommended = () => {
  return (
    <div className="recommended">
      <h3 className="new-release">Recommended For You</h3>
      <SingRecommend />
    </div>
  );
};

export default recommended;
