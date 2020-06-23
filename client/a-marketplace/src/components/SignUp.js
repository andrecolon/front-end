
import React, { useState, useEffect } from 'react'
import { Jumbotron, Card, CardImg, Form, FormGroup, Input, Label, Button, Dropdown, DropdownMenu } from 'reactstrap'
import { Route, Link } from 'react-router-dom'
import axiosWithAuth from './utils/axiosWithAuth'
import * as yup from 'yup'

const SignUp = () => {
    const [post, setPost] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""

    });

    const formSchema = yup.object().shape({
        name: yup
            .string()
            .min(5)
            .required(`Name is a required field `),
        email: yup
            .string()
            .required("Please enter a valid email address")
            .email("Please enter a valid email address"),
        password: yup.string()
    });

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({ ...errors, [e.target.name]: "" });
            })
            .catch(err => setErrors({ ...errors, [e.target.name]: err.errors[0] }));
    };

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log("valid?", valid);
            setIsButtonDisabled(!valid);
        });
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/auth/register", formState)
            .then(response => {
                setPost(response.data);
                setFormState({
                    name: "",
                    email: "",
                    password: "",
                });
            })
            .catch(err => console.error(console.error,
                err.response));
    };

    // onChange function
    const handleChange = e => {
        console.log("input changed!", e.target.value);
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validateChange(e);
        setFormState(newFormData);
    };

    return (
        <>
        <Card style = {{backgroundColor:'#303030', padding: '40px'}}>
            <h2 style = {{ margin:'0 auto', fontFamily:'Monoton', color:'#e74c3d'}}>
                Sign Up
            </h2>
            <CardImg/>
        </Card>
        <Form onSubmit={formSubmit}
        style = {{width: '50%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white', padding: '25px'}}>
            <FormGroup>
                <legend>Full Name</legend>
                <Input 
                type='name' 
                name='name' 
                value={formState.name} 
                onChange = {handleChange}
                />
            </FormGroup>
            <FormGroup>
                <legend>Email</legend>
                <Input 
                type='email' 
                name='email'
                        value={formState.email} 
                onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <legend>Password</legend>
                <Input 
                type='password' 
                name='password' 
                        value={formState.password} 
                onChange={handleChange}
                /> 
            </FormGroup>            
                <button type="submit" disabled={isButtonDisabled}>
                     Submit
                     </button>

                <pre>{JSON.stringify(post, null, 2)}</pre>

        </Form>
            <p className="forgot-password text-right">
                Already registered <Link to='/' >sign in?</Link>
            </p>
        </>
    )
}


export default SignUp;