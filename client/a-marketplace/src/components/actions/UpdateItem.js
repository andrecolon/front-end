import React, { useState, useEffect, useContext } from 'react';
import {MarketContext} from '../context/MarketContect'
import axios from 'axios';

const initialItem = {
    name: '',
    price: 0,
    location: '',
    description: ''
};

const UpdateForm = props => {
    const [item, setItem] = useState(initialItem);
    const [products, setProducts] = useContext(MarketContext)

    const changeHandler = ev => {
        ev.persist();
        let value = ev.target.value;
        if (ev.target.name === 'price') {
            value = parseInt(value, 10);
        }

        setItem({
            ...item,
            [ev.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // make a PUT request to edit the item
    };

    return (
        <div>
            <h2>Update Market Item</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    onChange={changeHandler}
                    placeholder="name"
                    value={item.name}
                />
                <div className="baseline" />

                <input
                    type="number"
                    name="price"
                    onChange={changeHandler}
                    placeholder="Price"
                    value={item.price}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="location"
                    onChange={changeHandler}
                    placeholder="Location"
                    value={item.imageUrl}
                />
                <div className="baseline" />

                <input
                    type="string"
                    name="description"
                    onChange={changeHandler}
                    placeholder="Description"
                    value={item.description}
                />
                <div className="baseline" />

                <div className="baseline" />

                <button className="md-button form-button">Update</button>
            </form>
        </div>
    );
};

export default UpdateForm;
