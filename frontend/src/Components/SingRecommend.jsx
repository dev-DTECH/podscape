import React from 'react'
import Card from "./Card";
import "../App.css";
import pic1 from "../images/pic1.jpeg";
const SingRecommend = () => {
  return (
    <>
      <Card pic ={pic1} category = {"Horror and Adventure"} heading = {"Sunday Suspense"}/>
      <br/><br/>
    </>
  )
}

export default SingRecommend
