import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';


// const CardRow = styled.div`
// display:flex;`;

function ItemsList(props) {
  console.log(props);
  return (
    <div className="items-list-wrapper">
      {props.items.map(item => {
        return (
          <Link to={`/shop/${item.id}`}>
           
            <div className="item-card" key={item.id}>
              <img
                className="item-list-image"
                
                src={item.imageUrl}
                //alt={item.name}
              />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{item.location}</p>
              
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ItemsList;