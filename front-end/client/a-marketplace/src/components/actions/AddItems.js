import React, { useState, useContext } from 'react';
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Lable, Button} from 'reactstrap'
import axiosWithAuth from '../utils/axiosWithAuth';
import * as yup from 'yup'
import {MarketContext} from '../context/MarketContext'
const AddItems = (updateItem) => {
    const [products, setProducts] = useContext(MarketContext);
    const [dropdownOpen, setdropdownOpen] = useState (false)
    const [itemData, setItemData] = useState ({
        name: "",
        price: 1,
        description: "",
        value: "",
        location: "",
    })

    const schema = yup.object().shape( {
        name: yup.string().required().min (2),
        //price: yup.number().required.positvive().integer().min(1),
        itemDes: yup.string().required(),
    })
    const submit = () => {
        //e.preventDefault();
        schema.validate(itemData)
        .then ( () => {
            axiosWithAuth()
            .post('/market', itemData)
                .then((res) => updateItem(res.data))    
    })
}
    const handleChange = (e) => {
        setProducts({ ...itemData, [e.target.name]: e.target.value })
        console.log(e.target.name)
    }
    const toggle = () => setdropdownOpen((prevState) => !prevState)

    // const addMarketItem = e => {
    //     e.preventDefault();
    //     setItemData(prevItems => [...prevItems, { name: item, price: price, description: description, location:location }])

    // }

    return(
        <>
        <Card style ={{backgroundColor:'#303030', padding: '40px'}}>
            <h2 style={{fontFamily:'Monoton', color:'#e74c3d', margin:'0 auto'}}>Add Your Item</h2>
         </Card>
        <Form  onSubmit = {(e) => {
              e.preventDefault();  
              submit() }
            }

        style={{
            width: '50%',
             margin:'0 auto', 
             border:'2px solid black', 
             marginTop: '10px', 
             backgroundColor:'#303030', 
             color:'white', 
             padding: '25px'
             }}>  
        <FormGroup>
        <legend>Name of Item</legend>
            <Input type = 'name' name= 'name' value={itemData.item} onChange = {handleChange}/>
            </FormGroup> 
        
      <FormGroup>
           <legend>Price</legend>
           <Input type='price' name = 'price' value = {itemData.price} onChange = {handleChange}/>
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
                    <Input type='textarea' name='description' value={itemData.description} onChange={handleChange}/>
       </FormGroup>

    <Button>Submit</Button>


       {/* <Link to='/ListPage'>
            <Button>Submit</Button>
        </Link> */}

        </Form>
        

        </>
    )
}
export default AddItems;