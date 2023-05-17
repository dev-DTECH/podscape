import React from 'react'
import "../App.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
const Single_category = (props) => {
  return (
    <div className='single' >
       <FontAwesomeIcon icon={faAtom} rotation={90} style={{color: "#8952ed",}} className='faatom'/>   
       <h5 className='sing-cat'>{props.catName}</h5>  
    </div>
  )
}

export default Single_category
