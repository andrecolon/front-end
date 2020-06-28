import React, { useState, useContext } from 'react'
import { MarketContext } from '../context/MarketContect'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import DeleteItem from './DeleteItems'


function AddNew() {
    const  push  = useHistory()
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [newItem, setNewItem] = useState('')
    const [products, setProducts] = useContext(MarketContext);

   // console.log("here is my added item ", products)


    const updateName = e => {
        setName(e.target.value)
        //capture event, target and value from the inputs
    }
    const updatePrice = e => {
        setPrice(e.target.value)
    }
    const updateDescription = e => {
        setDescription(e.target.value)
    }
    const updateLocation = e => {
        setLocation(e.target.value)
    }
    const addProduct = e => {
        e.preventDefault();
        setProducts(prevProducts => setProducts([...prevProducts, { item: name, price: price, description: description, location: location }]))
        axiosWithAuth()
            .post(`https://amp-node-api.herokuapp.com/api/market`, newItem)
            .then(res => setNewItem(res.data.data).history.push('/listpage'));
    }
    return (
        <>
        <form onSubmit={addProduct}>
            <input placeholder="Item name" type="text" name="name" value={name} onChange={updateName} />
            <input placeholder="Price" type="text" name="price" value={price} onChange={updatePrice} />
            <input placeholder="Location" type="text" name="location" value={location} onChange={updateLocation} />
            <input placeholder="Description" type="text" name="description" value={description} onChange={updateDescription} />
            <button>Submit</button>
        </form>
        <div className="items-list-wrapper">
                {products.map(itm => {
                return (

                        <div className="item-card" key={itm.id} style={{ padding: '25px' }}  >
                            <h1 >{itm.item}</h1>
                            <p>{itm.description}</p>
                            <p><strong>{itm.location}</strong></p>
                            <p>${itm.price}</p>
                        </div>
                );
            })}
        </div>
        </>
    )
}
export default AddNew
