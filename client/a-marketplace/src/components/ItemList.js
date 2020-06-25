import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {Card} from 'reactstrap'
import axios from 'axios'

// const CardRow = styled.div`
// display:flex;`;

function ItemsList( props ) {
  console.log(props);
  const [products, setProducts] = useState ([]);
  useEffect (() => {
    axios
    .get('https://amp-node-api.herokuapp.com/api/market/')
    .then (response => {
        console.log(response.data);
        setProducts(response.data)
    })
    .catch(error => console.log("Error!", error))
}, []);

  return (
    <div className="items-list-wrapper">
        {props.items.map(item => {
            return (
                <Link to={`/ListPage${item.id}`} style ={{padding:'25px', margin: '25px', color: 'green', background:'#303030' }}>
                    <div className="item-card" key={item.id}>
                        <Card style = {{padding:'25px', margin:'0 auto'}}>
                         <p>{item.name}</p>
                         <p>{item.description}</p>
                         <p>{item.location}</p>
                         <p>${item.price}</p>
                         </Card>
                    </div>
                </Link>
            )
        })}
        </div>
          
         
        );
     
  
}
export default ItemsList;
