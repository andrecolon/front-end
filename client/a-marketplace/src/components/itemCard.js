import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

 
const itemCard = ({id, name, description, location, price}) => {
  
    return (
        
        <div>
       <p>Name:{name}</p>
       
       <p>Description: {description}</p>
       <p>Location: {location}</p>
       <p>Price: {price}</p> 
       
        {/* // {.map(prices => ( */}
        {/* //    <div key ={prices} className = "item-price">
        //        {prices}
        //        </div>  */}
       
       
      </div>
    )
}
export default itemCard;
