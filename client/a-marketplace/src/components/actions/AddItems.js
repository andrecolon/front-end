import React, { useState, useContext } from 'react'
import { MarketContext } from '../context/MarketContect'
import axiosWithAuth from '../utils/AxiosWithAuth'
import ListPage from '../ListPage';
import { useHistory } from 'react-router-dom'


function AddNew() {
    const { push } = useHistory()
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [newItem, setNewItem] = useState('')
    const [products, setProducts] = useContext(MarketContext);
    console.log("here is my added item ", products)
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
        e.persist();
        setProducts(prevProducts => setProducts([...prevProducts, { name: name, price: price, description: description, location: location }]))
        axiosWithAuth()
            .post(`https://amp-node-api.herokuapp.com/api/market`, newItem)
            .then(res => setNewItem(res.data).history.push('/listpage'));
    }
    return (
        <form onSubmit={addProduct}>
            <input placeholder="Item name" type="text" name="name" value={name} onChange={updateName} />
            <input placeholder="Price" type="text" name="price" value={price} onChange={updatePrice} />
            <input placeholder="Location" type="text" name="location" value={location} onChange={updateLocation} />
            <input placeholder="Description" type="text" name="description" value={description} onChange={updateDescription} />
            <button>Submit</button>
        </form>
    )
}
export default AddNew
