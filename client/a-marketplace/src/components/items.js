import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useParams, Route, useRouteMatch, Link } from 'react-router-dom';
import axios from 'axios'
import Card from './itemCard'
import ItemList from './ItemList';





const items = (props) => {
    const [products, setProducts] = useState ();

    const id = useParams ()
    useEffect (() => {
        axios
        .get(`https://amp-node-api.herokuapp.com/api/market/${id.id}`)
        .then (response => {
            console.log(response.data);
            setProducts(response.data)
        })
        .catch(error => console.log("Error!", error))
    }, [id]);
    
    if (!products) {
        return <div>Loading products...</div>;
      }
    
      const { id, name, description, location, price} = products;

    return (
        <div className = "item-wrapper">
            <div classname = "item-card">
                <h2>{name}</h2>
                <div className = "description">
                     Description: <em>{description}</em>
                </div>
                <div className = "location">
                    Location: <strong>{location}</strong>
                </div>
            {price.map(item => (
                <div key = {price} className ="list-item">
                    {price}
                    </div>
            ))}

            </div>
   
       
     
        </div>
    )
   }
export default items;