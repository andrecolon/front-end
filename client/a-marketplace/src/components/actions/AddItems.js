import React, { useState } from 'react';
import { Card, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Lable, Button} from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'
import {Link, Route} from 'react-router-dom';

const AddItems = () => {
    const [dropdownOpen, setdropdownOpen] = useState (false)
    const [itemData, setItemData] = useState ({
        name: "",
        price: 0,
        itemDes: "",
        location: "",
    })

    const schema = yup.object().shape( {
        name: yup.string().required().min (2),
        // price: yup.number().required.positvive().integer().min(1),
        itemDes: yup.string().required(),
    })
    const submit = () => {
        schema.validate(itemData).then ( () => {
            axios.post('https://reqres.in/api/users', itemData).then((res) => {
        })
    })
}
    const handleChange = (e) => {
        setItemData({...itemData, [e.target.name]: e.target.value})
    }
    const toggle = () => setdropdownOpen((prevState) => !prevState)

    return(
        <>
        <Form  onSubmit = {(e) => {
            e.preventDefault()
            submit()
        }}

        style={{width: '50%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white', padding: '25px'}}>  
        <FormGroup>
        <h2 style={{fontFamily:'Monoton', color:'#e74c3d', margin:'0 auto'}}>Add Your Item</h2>
        </FormGroup>

        <FormGroup>
        <legend>Name of Item</legend>
            <Input type = 'name' name= 'name' value={itemData.name} onChange = {handleChange}/>
            </FormGroup> 
        
      <FormGroup>
           <legend>Price</legend>
           <Input type = 'price' name = 'price' value = {itemData.price} onChange = {handleChange}/>
       </FormGroup>

       <FormGroup>
           <legend>Location</legend>
           <Dropdown isOpen = {dropdownOpen} toggle = {toggle}>
               <DropdownToggle caret>
                   {FormData.value === '' ? 'location': itemData.value}
               </DropdownToggle>
            <DropdownMenu>
                <div onClick = {() => {
                    toggle();
                    setItemData({...itemData, value:"Uganda"})
                }}>Uganda</div>

                <div onClick = {() => {
                    toggle();
                    setItemData({...itemData, value:"Kenya"})
                }}>Kenya</div>

                <div onClick = {() => {
                    toggle();
                    setItemData({...itemData, value: "Tanzania"})
                }}>Tanzania</div>

                <div onClick = {() => {
                    toggle();
                    setItemData({...itemData, value: "Rwanda"})
                }}>Rwanda</div>

                <div onClick = {() => {
                    toggle();
                    setItemData({...itemData, value: "Burundi"})
                }}>Burundi</div>

                <div onClick = {() => {
                    toggle();
                    setItemData({...itemData, value: "South-Sudan"})
                }}>South Sudan</div>

            </DropdownMenu>
           </Dropdown>
       </FormGroup>

       <FormGroup>
           <legend>Item Description</legend>
           <Input type = 'textarea' name = 'itemDes' value = {itemData.itemDes} onChange = {handleChange}/>
       </FormGroup>

       

       <Link to = '/ListPage'>
            <Button>Submit</Button>
        </Link>

        </Form>
        

        </>
    )
}
export default AddItems;