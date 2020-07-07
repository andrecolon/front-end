import React, { useState, useEffect, useContext } from 'react';
import { MarketContext } from '../context/MarketContext'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

const UpdateForm = props => {
    //const [item, setItem] = useState(initialItem);
    const [products, setProducts] = useContext(MarketContext)
    const { id } = useParams()
    const push = useHistory()

    useEffect(() =>{
        axiosWithAuth()
        //.get(`market/${item.id}`)
        .get(`market/2`)
            .then(res => setProducts(res.data))
        .catch(err => console.log(err.message))
    },[id])

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;

        setProducts({
            ...products,
            [ev.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`market/${products.id}`, products)
            .then(res => 
                setProducts(res.data).history.push('/listpage'))
            .catch(err => console.log(err.message, err.response))
    };



    return (
        <div style={{ width: '40%', margin: '0 auto', border: '2px solid black', marginTop: '10px', backgroundColor: '#303030', color: 'white', padding: '25px' }}>
            <h2>Update Market Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="item"
                    onChange={changeHandler}
                    placeholder="name"
                    value={products.item}
                    style={{ width: '75%', margin: '0 auto' }}
                />
                <div className="baseline" />

                <input
                    type="number"
                    name="price"
                    onChange={changeHandler}
                    placeholder="Price"
                    value={products.price}
                    style={{ width: '75%', margin: '0 auto' }}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="location"
                    onChange={changeHandler}
                    placeholder="location"
                    value={products.location}
                    style={{ width: '75%', margin: '0 auto' }}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="description"
                    onChange={changeHandler}
                    placeholder="Description"
                    value={products.description}
                    style={{ width: '75%', margin: '0 auto' }}
                />
                <div className="baseline" />

                <div className="baseline" />

                <button className="md-button form-button">Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;
