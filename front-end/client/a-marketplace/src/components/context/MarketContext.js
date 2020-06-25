import React, { useState, useEffect, createContext } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'


export const MarketContext = createContext();
export const MarketProvider = props => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get("market")
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error?", error);
            });
    }, []);

    return (
        <MarketContext.Provider value={[products, setProducts]}>
            {/* Context Api is managing state, making props availalbe everywhere */}
            {props.children}
        </MarketContext.Provider>
    )
}

