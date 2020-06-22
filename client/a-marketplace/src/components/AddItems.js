import React, { useState } from 'react';
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Lable, Button} from 'reactstrap'
import axios from 'axios'
import * as yup from 'yup'

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
        <Card style ={{backgroundColor:'#303030', padding: '40px'}}>
            <h2 style={{fontFamily:'Monoton', color:'#e74c3d', margin:'0 auto'}}>Add Your Item</h2>
         </Card>
        <Form  onSubmit = {(e) => {
            e.preventDefault()
            submit()
        }}
        style={{width: '50%', margin:'0 auto', border:'2px solid black', marginTop: '10px', backgroundColor:'#303030', color:'white', padding: '25px'}}>  
        <FormGroup>
        <legend>Name of Item</legend>
            <Input type = 'name' name= 'name' value={itemData.name} onChange = {handleChange}/>
            </FormGroup> 
        
       <FormGroup>
           <legend>Item Description</legend>
           <Input type = 'textarea' name = 'itemDes' value = {itemData.itemDes} onChange = {handleChange}/>
       </FormGroup>
       <Button>Submit</Button>
        </Form>
        
        </>
    )
}
export default AddItems;