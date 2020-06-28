import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { MarketContext } from './context/MarketContect'
import AddItems from './actions/AddItems'
// const CardRow = styled.div`
// display:flex;`;

function ItemsList(props) {
    const [products, setProducts] = useContext(MarketContext);
    return (
        <>
            
        <div className="items-list-wrapper">
            {props.items.map(itm => {
                return (
                    <Link exact to={<Login />}>

                        <div className="item-card" key={itm.id} style={{ padding: '25px' }}  >

                            <h1 >{itm.item}</h1>
                            <p>{itm.description}</p>
                            <p><strong>{itm.location}</strong></p>
                            <p>${itm.price}</p>

                        </div>
                    </Link>
                );
            })}
        </div>
        </>
    );
}

export default ItemsList;