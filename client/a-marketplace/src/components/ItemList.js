import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


// const CardRow = styled.div`
// display:flex;`;

function ItemsList(props) {
  console.log(props);
  return (
    <div className="items-list-wrapper">
      {props.items.map(itm => {
        return (
          <Link to={`/shop/${itm.id}`}>
           
            <div className="item-card" key={itm.id}>

              <p>{itm.item}</p>
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