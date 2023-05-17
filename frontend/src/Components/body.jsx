import React from "react";
import NewRelease from "./newRelease";
import Category from "./categories";
import Recommended from "./recommended";
import Nav from "./Nav";


const body = () => {
  return (
    <div className="body">
      <Nav/>
      <NewRelease />
      <Category />
      <Recommended />
    </div>
  );
};

export default body;
