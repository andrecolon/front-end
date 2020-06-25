import React, {useState, useContext} from 'react'
import { MarketContext } from '../context/MarketContext'
import axiosWithAuth from '../utils/axiosWithAuth'
import ListPage from '../ListPage';

function AddNew(updatedProduct) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [newItem, setNewItem] = useState('')
    const [products, setProducts] = useContext(MarketContext);

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
    const addProduct = e => {
       if(addProduct){

        e.preventDefault();
        setProducts(prevProducts => [...prevProducts, { name: name, price: price, description: description }])
        axiosWithAuth()
            .post(`https://amp-node-api.herokuapp.com/api/market`, newItem)
            .then(res => setNewItem(res.data))
        //M&P = setProducts param is spreading the state of previous movies and adding another object in our array
        console.log(updatedProduct)
       } else {
           return <ListPage/>
       }
    }
    return (
        <form onSubmit={addProduct}>
            <input placeholder="Item name" type="text" name="name" value={name} onChange={updateName} />
            <input placeholder="Price" type="text" name="price" value={price} onChange={updatePrice} />
            <input placeholder="Description" type="text" name="description" value={description} onChange={updateDescription} />
            <button>Submit</button>
        </form>
    )
}
export default AddNew
