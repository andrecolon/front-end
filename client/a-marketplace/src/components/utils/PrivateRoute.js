import React from 'react';
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    return (alert("Please Login to edit your Marketplace", setTimeout(5000)), <Redirect to="/" />)
                }
            }}
        />



    )
};


export default PrivateRoute
