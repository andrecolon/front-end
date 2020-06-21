import React, { useState } from 'react'
import { Card, CardImg, Form, FormGroup, Input, Label, Button, Dropdown, DropdownMenu } from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import AddItems from './AddItems'

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
            axios.post('https://amp-node-api.herokuapp.com/api/auth/register', formData).then((res) => {
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
        <Card>
            <h2 style = {{color: 'black', margin:'0 auto'}}>
                Sign Up
            </h2>
            <CardImg/>
        </Card>
        <Form  onSubmit = {(e) => {
            e.preventDefault()
            submit()
        }}
        style = {{width: '50%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white', padding: '25px'}}>
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
            
            <Button>Submit</Button>

            <p className="forgot-password text-right">
                    Already registered <Link to = '/' >sign in?</Link>
             </p>
            <Link to = '/AddItems'>
             <Button>Add Items</Button>
             </Link>
            
        </Form>
        </>
    )
}

export default SignUp;