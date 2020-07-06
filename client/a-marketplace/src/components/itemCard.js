import React, { useContext} from 'react'
import { MarketContext } from './context/MarketContext'


 
const ItemCard = (items) => {
  const [products, setProducts] = useContext(MarketContext);
  const {item, location, description, price} = items
    return (
        
      <div className="item-card" style={{ padding: '25px' }} >
        <h1>{items.item}</h1>
       
        <p>Description: {items.description}</p>
        <p><strong>Location: {items.location}</strong></p>
        <p>Price: {items.price}</p> 
       
      </div>
    )
}
export default ItemCard;
