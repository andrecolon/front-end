import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Button, Form, Card, CardImg, FormGroup, Input, Label } from 'reactstrap'
const Login = () => {
    return(
        <>
            <Form  style={{width: '50%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white'}}>
                <FormGroup>
                    <legend>User Name/Email:</legend>
                    <Input type='username' name='name' style={{width:'50%', margin:'0 auto'}}></Input>
                </FormGroup>
                <FormGroup>
                    <legend>Password:</legend>
                    <Input type='password' name='password' style={{width:'50%', margin:'0 auto'}}></Input>
                </FormGroup>
            <Button style={{margin:'10px', backgroundColor:'#fff', color:'#303030'}}> SignUp</Button>
            <Button style={{margin:'10px', backgroundColor:'#e74c3d'}}> Login</Button>
            </Form>
        </>
    )
}
export default Login