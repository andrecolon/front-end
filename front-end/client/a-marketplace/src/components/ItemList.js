import React, {useContext} from "react";
import { Link } from "react-router-dom";
import UpdateForm from "./actions/UpdateItem";
import {MarketContext} from './context/MarketContext'

// const CardRow = styled.div`
// display:flex;`;

function ItemsList(props) {
  const [products, setProducts] = useContext(MarketContext);
  return (
    <div className="items-list-wrapper">
      {props.items.map(itm => {
        return (
          <Link exact to={<UpdateForm/>}>
           
            <div  className="item-card" key={itm.id} style= {{padding:'25px'}}  >

              <p >{itm.item}</p>
              <p>{itm.description}</p>
              <p>{itm.location}</p>
              <p>${itm.price}</p>
              
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ItemsList;