import React,  { useState }from 'react';
import {Link, Route} from 'react-router-dom';
import {Button, Form, Card, CardImg, FormGroup, Input, Label } from 'reactstrap';
import *as yup from 'yup';
import axios from 'axios';

const Login = () => {
    const [loginData, setloginData] = useState ({
        name: "",
        password: ""
    })
    const schema = yup.object().shape({
        name: yup.string().required().min(2),
        password: yup.string().required().min(1)
    })
    const login = () => {
        schema.validate(loginData).then( () => {
            axios.post('https://amp-node-api.herokuapp.com/api/auth/login', loginData).then((res) => {
                console.log(res.data, "This is the posted data")
            })
        })
    } 
    const handleChange = (e) => {
        setloginData({...loginData, [e.target.name]: e. target.value})
    }
    return(
        <>
            <Form  style={{width: '60%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white', padding:'25px'}}>
                <FormGroup>
                    <legend>User Name/Email:</legend>
                    <Input type='username' name='name' style={{width:'70%', margin:'0 auto'}}></Input>
                </FormGroup>
                <FormGroup>
                    <legend>Password:</legend>
                    <Input type='password' name='password' style={{width:'70%', margin:'0 auto'}}></Input>
                </FormGroup>

                <Link to = '/SignUp'>
            <Button style={{margin:'10px', backgroundColor:'#fff', color:'#303030'}}> SignUp </Button>
            </Link>
            <Link to='/ListPage'><Button style={{margin:'10px', backgroundColor:'#e74c3d'}}> Login</Button></Link>
            </Form>
        </>
    )
}
export default Login