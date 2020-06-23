
import React, {useState, useEffect} from 'react';
import { Jumbotron, Container, Card, CardHeader, CardImg, CardTitle, CardText, Button, Navbar, NavbarBrand, NavItem, NavLink, NavbarText} from 'reactstrap';
import axiosWithAuth from '../components/utils/axiosWithAuth'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.png';
import axios from 'axios'


// const [state, setState] = useState('[]');
const ListPage = () => {

const [ services, setServices] = useState('')

    useEffect(() => {
        const getData = () => {
            axiosWithAuth()
                .get(`/api/business`) 
                .then(res => {
                    console.log(res.data);
                    setServices(res.data)
                })
                .catch(err =>
                    console.error("What's my error? ", err.message, err.res)
                );
        }
        getData()//useEffect is crying for a dependancy value ..oh yeah?!
        // eslint-disable-next-line
    }, [])


    return(
        <div>
            <Jumbotron fluid style={{backgroundColor:'#303030'}}>
                <Container>
                    <h1><span>African</span> MARKETPLACE</h1>
                </Container>
            </Jumbotron>
         
            <div className='header' style={{display:'flex'}}>
                 <Card style={{width:'25%', marginLeft:'575px', borderRadius:'50%', backgroundColor:'#fff'}}>
                    <CardImg src={img2} style={{borderRadius:'50%', marginTop: '100px'}}    />
                </Card>
              
                    <CardTitle style={{marginTop: '230px', marginLeft:'100px'}}><h1>Mosi Marjani: <br/><span style={{ fontFamily:'Monoton'}}>MOSI <br /> MEALS<br />  LLC.</span></h1></CardTitle>
                    <hr/>
                
            </div>
            {/* <br/>
            <Card></Card>
            <Card body outline color='danger' style={{width: '25%', margin:'0 auto', marginTop:'10px', color:'white', backgroundColor:'#303030'}}>
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
            </Card> */}

        </div>

    )
}
export default ListPage;