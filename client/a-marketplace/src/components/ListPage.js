
import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Card, CardHeader, CardImg, CardTitle, Input, CardText, Button, Navbar, NavbarBrand, NavItem, NavLink, NavbarText} from 'reactstrap';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.png';
import { Route, Link } from 'react-router-dom'




const ListPage = (props) => {
    console.log(props);

  
    
    return(

        

        <div style={{backgroundColor:'#e74c3d'}}>
            
            {/* <Jumbotron fluid style={{backgroundColor:'#303030'}}>
                <Container>
                    <h1 className='display-3' style={{color:'#fff'}}><span style={{fontFamily:'Monoton', color:'#e74c3d'}}>African</span> MARKETPLACE</h1>
                </Container>
            </Jumbotron> */}

            
         
            <div className='header' style={{display:'flex'}}>
                 <Card style={{width:'25%', marginLeft:'50px', borderRadius:'50%', backgroundColor:'green'}}>
                    {/* <CardImg src={img2} style={{borderRadius:'50%', marginTop: '100px'}}    /> */}

                    
                    <div
                        style={{
                        height: "100px",
                        width: "25%",
                        border: "1px dashed black",
                        borderRadius:'50%',
                        marginLeft:'100px',
                        marginTop: "50px"}}>

                    </div>
                    <Input type="file" style = {{marginTop:"200px", margin: "15%"}}/>
                </Card>
              
                    <CardTitle style={{marginTop: '230px', marginLeft:'100px'}}><h1>Business Owner: <br/><span style={{ fontFamily:'Monoton'}}>Business<br /> Name<br />  LLC.</span></h1></CardTitle>
                    <hr/>
            
            <Link to = '/AddItems'>
             <Button>Add Items</Button>
             </Link>

            </div>
            <br/>
            <Card></Card>
            {/* <Card body outline color='danger' style={{width: '25%', margin:'0 auto', marginTop:'10px', color:'white', backgroundColor:'#303030'}}>
                <CardHeader ><h2 style={{fontFamily:'Monoton', color:'lightgreen'}}>Product</h2></CardHeader>
                <CardImg src={img1} alt='Africa'/>
                <CardText>Description of Product will go here and we will ramble on and on to get the real effect for this area</CardText>
                <Button style={{width: '25%', margin:'0 auto', backgroundColor:'#ffd50b', color:'#303030'}}>Buy</Button>
            </Card>
            <Card body outline color='danger' style={{width: '25%', margin:'0 auto', marginTop:'10px', color:'white', backgroundColor:'#303030'}}>
            <CardHeader><h2 style={{fontFamily:'Monoton', color:'lightgreen'}}>Product</h2></CardHeader>
                <CardImg src={img1} alt='Africa'/>
                <CardText>Description of Product will go here and we will ramble on and on to get the real effect for this area</CardText>
                <Button style={{width: '25%', margin:'0 auto', backgroundColor:'#ffd50b', color:'#303030'}}>Buy</Button>
            </Card>
            <Card body outline color='danger' style={{width: '25%', margin:'0 auto', marginTop:'10px', color:'white', backgroundColor:'#303030'}}>
            <CardHeader><h2 style={{fontFamily:'Monoton', color:'lightgreen'}}>Product</h2></CardHeader>
                <CardImg src={img1} alt='Africa'/>
                <CardText>Description of Product will go here and we will ramble on and on to get the real effect for this area</CardText>
                <Button style={{width: '25%', margin:'0 auto', backgroundColor:'#ffd50b', color:'#303030'}}>Buy</Button>
            </Card>
            */}

       
   

            
        </div>

    )
}
export default ListPage;