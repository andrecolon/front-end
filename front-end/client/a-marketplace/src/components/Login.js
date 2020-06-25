
import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Form, Card, CardImg, FormGroup, Input, Label } from 'reactstrap';
import * as yup from 'yup';
import axiosWithAuth from './utils/axiosWithAuth';
const Login = () => {
    const [loginData, setloginData] = useState({
        username: "",
        password: ""
    });
    const schema = yup.object().shape({
        username: yup.string().required().min(2),
        password: yup.string().required().min(1)
    });
    const api_login = (loginData) => {
        axiosWithAuth()
            .post('http://amp-node-api.herokuapp.com/api/auth/login', 
            ({ username: loginData.username, password: loginData.password }))
            .then((res) => {
                console.log("This is the posted data", res)
            })
            .catch(err => {
                console.log('error!', err)
            });

    };
    const handleChange = (e) => {
        setloginData({ ...loginData, [e.target.name]: e.target.value })
        console.log(loginData)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        api_login(loginData);
    };
    
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <legend>User Name/Email:</legend>
                    <Input type='username' name='username' onChange={handleChange} style={{ width: '70%', margin: '0 auto' }}></Input>
                </FormGroup>
                <FormGroup>
                    <legend>Password:</legend>
                    <Input type='password' name='password' onChange={handleChange} style={{ width: '70%', margin: '0 auto' }}></Input>
                </FormGroup>
                <button>login</button>
               </Form>
=======

        </>
    )
}
export default Login;