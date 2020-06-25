
import React, { useState } from 'react'
import { Jumbotron, Card, CardImg, Form, FormGroup, Input, Label, Button, Dropdown, DropdownMenu } from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import AddItems from './AddItems'
import axiosWithAuth from './utils/axiosWithAuth';

const SignUp = () => {
    // const [dropdownOpen, setdropdownOpen] = useState (false)
    const [formData, setFormData] = useState ({
        name: "",
        email: "",
        value:"",
        password: ""
    })
    
    const schema = yup.object().shape({
        name: yup.string().required().min(2),
        email: yup.string().required().min(1),
        value: yup.string().required(),
        password: yup.string().required(),
        
    })

    const submit = () => {
        schema.validate(formData).then( () => {
            axiosWithAuth().post('https://amp-node-api.herokuapp.com/api/auth/register', 
                ({ username: formData.name, password: formData.password, email:formData.email, value:formData.value }))
                .then((res) => {
                console.log(res.data, 'This data')
            })
        })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // const toggle = () => setdropdownOpen ((prevState ) => !prevState)

    return (
        <>
        <Card style = {{backgroundColor:'#303030', padding: '40px'}}>
            <h2 style = {{ margin:'0 auto', fontFamily:'Monoton', color:'#e74c3d'}}>
                Sign Up
            </h2>
            <CardImg/>
        </Card>
        <Form  onSubmit = {(e) => {
            e.preventDefault()
            submit()
        }}
        style = {{width: '20%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white', padding: '25px'}}>
            <FormGroup>
                <legend>Full Name</legend>
                <Input type = 'name' name= 'name' value = {formData.name} onChange = {handleChange}/>
            </FormGroup>
            <FormGroup>
                <legend>Email</legend>
                <Input type = 'email' name ='email' value = {formData.email} onChange= {handleChange}/>
            </FormGroup>
            <FormGroup>
                <legend>Password</legend>
                <Input type = 'password' name = 'password' value = {formData.password} onChange = {handleChange}/> 
            </FormGroup>
            <FormGroup>
                <legend>Confirm Password</legend>
                <Input type = 'password' name = 'password' value = {formData.password} onChange = {handleChange}/> 
            </FormGroup>

            <Link to = '/login'>
            <Button>Submit</Button>
            </Link>

            <p className="forgot-password text-right">
                    Already registered <Link to = '/login' >sign in?</Link>
             </p>
           
            
        </Form>
        </>
    )
}


export default SignUp;