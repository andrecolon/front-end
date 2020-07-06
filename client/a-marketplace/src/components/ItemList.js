import React, { useContext } from "react";
import { MarketContext } from './context/MarketContext'
import { useHistory } from 'react-router-dom';
import ItemCard from './ItemCard'

function ItemsList() {
    const [products, setProducts] = useContext(MarketContext);
    const {push, history} = useHistory()
    return (
        <>
            
            <div className="items-list-wrapper">
                {
                products.map(itm =>(

                    <ItemCard
                        description={itm.description}
                        location={itm.location}
                        price={itm.price}
                        item={itm.item}
                    />
                ))}
            </div>
        </>
    );
}

export default ItemsList