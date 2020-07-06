import React, { useState, useContext } from 'react'
import { MarketContext } from '../context/MarketContext'
import axiosWithAuth from '../utils/axiosWithAuth'
import { useHistory, useParams } from 'react-router-dom'
import DeleteItem from './DeleteItems'


function AddNew() {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [newItem, setNewItem] = useState('')
    const [products, setProducts] = useContext(MarketContext);
    const {id} = useParams()
    const {push} = useHistory()
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

    // const deleteMessage = id => {
    //     axiosWithAuth()
    //         .delete(`market/${id}`)
    //         .then(res => console.log(res.data, res.message))
    //         .catch(err => console.log(err));
    // };

    const handleDelete = e => {
       e.preventDefault()
        axiosWithAuth()
            .delete(`market/${products.id}`)
            .then(res => {
                const updatedList = products.filter(itm => {
                    if (itm.id === itm.id) {
                        return products;
                    }
                    return itm;
                });

                setProducts(res.data)
                push('/ListPage')
            })
            .catch(err => console.log(err.message, err.response))
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
                        <button onClick={() => handleDelete()}>Delete me</button>
                            <h1 >{itm.item}</h1>
                            <p>{itm.description}</p>
                            <p><strong>{itm.location}</strong></p>
                            <p>${itm.price}</p>
                        <button onClick={() => push(`/update-form/${itm.id}`)}>
                            Edit This  Item
                                </button>
                        

                        </div>
                        
                );
            })}
        </div>
        </>
    )
}
export default AddNew
