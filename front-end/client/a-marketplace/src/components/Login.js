
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
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
    const { push } = useHistory()
    const api_login = (loginData) => {
        axiosWithAuth()
            // .post('http://amp-node-api.herokuapp.com/api/auth/login', 
            // ({ username: loginData.username, password: loginData.password }))
            .post('http://amp-node-api.herokuapp.com/api/auth/login', loginData)
            .then((res) => {
                //console.log("This is the set token", res)
                localStorage.setItem("token", res.data.token);
                push("/add");
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
                <h2>Log in to add new items</h2>
                <Input placeholder="Username: testmin" type='username' name='username' onChange={handleChange} style={{ width: '70%', margin: '0 auto' }}></Input>
                <Input placeholder="Password: testmin1234" type='password' name='password' onChange={handleChange} style={{ width: '70%', margin: '0 auto' }}></Input>
                <Button>login</Button>
            </Form>


        </>
    )
}
export default Login;