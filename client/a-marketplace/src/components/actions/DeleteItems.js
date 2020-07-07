import React, { useContext, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { MarketContext } from '../context/MarketContext'
import { useParams, useHistory } from "react-router-dom";

const DeleteItem = ({ prod, updatedProduct }) => {
    const [products, setProducts] = useContext(MarketContext)
    const [itemToEdit, setItemToEdit] = useState('');
    const [editing, setEditing] = useState(false);
    const { id } = useParams();

    console.log("Here we delete items", products)

    const editItem = prod => {
        setEditing(true);
        setItemToEdit(id);
    };

    const deleteItem = () => {
        axiosWithAuth()
            .delete(`/market/2`)
            // .delete(`/market/${id}`)
            .then(res => {
                axiosWithAuth()
                    .get('market')
                    .then(res => {
                        console.log(res.data)
                        updatedProduct(res.data)
                    })
            })
            .catch(err =>
                console.error(err.message, err.response)
            );
    };
    return (
        <div>
            <ul>
                {products.filter(itm => (
                    <li key={itm.id} onClick={() => editItem(prod)}>
                        <span>
                            <span className="delete" onClick={e => {
                                e.stopPropagation();
                                deleteItem(prod)
                            }
                            }>

                                <p>{itm.item}</p>
                                <p>{itm.description}</p>
                                <p>{itm.location}</p>
                                <p>${itm.price}</p>
                                x Delete me

              </span>
                            {itm.prod}
                        </span>

                        <div
                            className="color-box"

                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DeleteItem
