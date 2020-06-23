import React, { useState}from 'react';
import {Link, Route} from 'react-router-dom';
import {Button, Form, Card, CardImg, FormGroup, Input, Label } from 'reactstrap';
import *as yup from 'yup';
import axiosWithAuth from '../components/utils/axiosWithAuth';
import { useHistory, useParams} from 'react-router-dom'



const Login = () => {
    const [loginData, setloginData] = useState ({
        username: "",
        password: ""
    })
    //const { id } = useParams(); fro selecting specific list items
    const { push } = useHistory();

    const schema = yup.object().shape({
        username: yup.string().required().min(2),
        password: yup.string().required().min(1)
    })
    const login = () => {
        schema.validate(loginData)
            axiosWithAuth()
                .post('/auth/login', loginData)
                .then(res => {
                   localStorage.setItem("token", res.data);
                    console.log("what is the response here? ",res)
                    push("/ListPage")
                })
                .catch(err => console.log(err.message))

    } 
    const handleChange = (e) => {
        setloginData({...loginData, [e.target.name]: e.target.value})
    }
    return(
        <>
            <Form onSubmit={login} style={{width: '50%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white'}}>
                <FormGroup>
                    <legend>UserName:</legend>
                    <Input 
                    type='username' 
                        name='username' 
                    style={{ width: '50%', margin: '0 auto' }}
                    onChange={handleChange}
                    ></Input>
                </FormGroup>
                <FormGroup>
                    <legend>Password:</legend>
                    <Input 
                    type='password' 
                    name='password' 
                    style={{width:'50%', margin:'0 auto'}}
                    onChange={handleChange}
                    ></Input>
                    <legend>Test Credentials = un: testmin pw: testmin1234</legend>
                </FormGroup>

                <Link to = '/SignUp'>
            <Button 
            tyle={{margin:'10px', backgroundColor:'#fff', color:'#303030'}}> SignUp </Button>
            </Link>
            <Link to='/ListPage'><Button style={{margin:'10px', backgroundColor:'#e74c3d'}}> Login</Button></Link>
            </Form>
            

        </>
    )
}
export default Login