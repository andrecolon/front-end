
import React, { useState } from 'react'
import { Jumbotron, Card, CardImg, Form, FormGroup, Input, Label, Button, Dropdown, DropdownMenu } from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import * as yup from 'yup'
import axiosWithAuth from './utils/axiosWithAuth';
import { useHistory } from "react-router-dom";

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
    const { push } = useHistory()
    const [errors, setErrors] = useState(formData);
    const submit = () => {
        // schema.validate(formData).then( () => {
            axiosWithAuth()
            .post('https://amp-node-api.herokuapp.com/api/auth/register', 
                ({ username: formData.name, password: formData.password, email:formData.email, value:formData.value }))
                .then((res) => {
                console.log(res.data, 'This data')
                    localStorage.setItem("token", res.data.token);
                    // push("/ListPage");
                    setFormData = res.data
                })
            // .catch (err => {
            //     console.log ("Error!!!", err)
            //     setErrors({ ...errors, [res.data.token]: err.errors[0] });
            // })
        
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // const toggle = () => setdropdownOpen ((prevState ) => !prevState)

    return (
        <>
        <Form  onSubmit = {(e) => {
            e.preventDefault()
            submit()
        }}
        style = {{width: '40%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white', padding: '25px'}}>
            
            <FormGroup style= {{margin:'0 auto', fontFamily:'Monoton', color:'#e74c3d'}}>
                <legend style= {{margin:'0 auto', marginBottom: '30px', postion: 'flex'}}>Sign Up</legend>
            </FormGroup>

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

         <Link to= '/Login'>
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