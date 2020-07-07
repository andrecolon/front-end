import React from "react";
import { useParams } from 'react-router-dom';
import { MarketContext } from './context/MarketContext'

const items = () => {
    const [products, setProducts] = useContext(MarketContext)
    const id = useParams()

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