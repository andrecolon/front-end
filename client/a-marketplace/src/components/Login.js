import React, {useState} from 'react';
import {Link, Route} from 'react-router-dom';
import {Button, Form, Card, CardImg, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'
import SignUp from './SignUp';
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
            <Form  style={{width: '50%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white'}}>
                <FormGroup>
                    <legend>User Name/Email:</legend>
                    <Input type='username' name='name' value = {loginData.name} onChange = {handleChange} style={{width:'50%', margin:'0 auto'}}></Input>
                </FormGroup>
                <FormGroup>
                    <legend>Password:</legend>
                    <Input type='password' name='password' value = {loginData.password} onChange = {handleChange} style={{width:'50%', margin:'0 auto'}}></Input>
                </FormGroup>
         
             <Link to = '/signUp'>
             <Button style={{margin:'10px', backgroundColor:'#fff', color:'#303030'}}>
                 Sign Up
            </Button>
            </Link>
            
            <Route path = '/signUp'>
              <SignUp/>  
            </Route>  
            
 
            <Button style={{margin:'10px', backgroundColor:'#e74c3d'}}> Login</Button>
            </Form>
        </>
    )
}
export default Login