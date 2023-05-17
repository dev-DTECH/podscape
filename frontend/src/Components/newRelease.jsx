import React from 'react';
import "../App.css";
import Card from "./Card";
import pic1 from "../images/pic1.jpeg";
const newRelease = () => {
  return (
    <>
      <h3 className='new-release'>New Releases</h3>
      <Card pic ={pic1} favourite ={true} category = {"Horror and Adventure"} heading = {"Sunday Suspense"}/>
      
    </>
  )
}

export default newRelease
