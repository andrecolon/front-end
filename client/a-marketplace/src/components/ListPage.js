
import React, {useState, useEffect} from 'react';
import {CardTitle, Card, Input, Button, CardImg} from 'reactstrap';
import { Route, Link } from 'react-router-dom'
import market  from "./data";
import ItemList from './ItemList';
import OwnersList from './OwnersList'
import axiosWithAuth from './utils/AxiosWithAuth'
import axios from 'axios'


const ListPage = () => {
   
    const [products, setProducts] = useState ([]);
    useEffect (() => {
      axios
      .get('https://amp-node-api.herokuapp.com/api/market/')
      .then (response => {
          console.log(response.data);
          setProducts(response.data)
      })
      .catch(error => console.log("Error!", error))
  }, []);
  

    return(

        <div style={{backgroundColor:'#e74c3d'}}>
            

            <div className='header' style={{display:'flex'}}>
                 <Card style={{width:'25%', marginLeft:'50px', borderRadius:'0%'}}>
                    {/* <div
                        style={{
                        height: "100px",
                        width: "25%",
                        border: "1px dashed black",
                        borderRadius:'0%',
                        marginLeft:'100px',
                        marginTop: "50px",
                        backgroundColor:'grey'}}>

                    </div> */}
                    <CardImg style = {{width:'100%', margin:'0 auto', height:'200px'}} src={require ('../assets/img4.jpg')}/>
                    <Input type="file" style = {{marginTop:"200px", margin: "15%"}}/>
                </Card>
       
              
                    {/* <CardTitle style={{marginTop: '230px', marginLeft:'100px'}}><h1>Business Owner: <br/><span style={{ fontFamily:'Monoton'}}>Business<br /> Name<br />  LLC.</span></h1></CardTitle> */}
                    <hr/>
                    <OwnersList />

            <Link to = '/AddItems'>
             <Button>Add Items</Button>
             </Link>

            </div>
            <br/>
            <Card>

                <div className="items-list-wrapper">
                    <ItemList items={products} />
                    

                </div>
            </Card>
            
        </div>

    )
}
export default ListPage;