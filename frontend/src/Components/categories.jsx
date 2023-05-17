import React from 'react'
import "../App.css";
import Single from "./Single_category";
const categories = () => {
  return (
    <div className='top-category'>
      <h3 className='new-release'>Top Category</h3>
      <Single catName={"Technology"} />
    </div>
  )
}

export default categories
