
import React, { useState, useEffect, useContext } from 'react';
import { CardTitle, Card, Input, Button, FormGroup, CardImg} from 'reactstrap';
import { Route, Link } from 'react-router-dom'
import ItemList from './ItemList';
import OwnersList from './OwnersList';
import { MarketContext } from './context/MarketContext'

const ListPage = () => {
    const [products, setProducts] = useContext(MarketContext)
    
    return (
        <div style={{ backgroundColor: '#e74c3d' }}>
            <div className='header' style={{ display: 'flex' }}>
                <Card style={{ width: '25%', marginLeft: '50px', borderRadius: '0%'}}>
                    
                    <CardImg style = {{width:'100%', margin:'0 auto', height:'200px'}} src={require ('../assets/img4.jpg')}/>
                    <Input type="file" style={{ marginTop: "200px", margin: "15%" }} />
                </Card>

                <Link to='/AddItems'>
                    <FormGroup style={{padding:'10px'}}>
                    <Button >Edit Items</Button>
                    </FormGroup>
                </Link>
            </div>
            <br />
            <Card>
                <div className="items-list-wrapper">
                    <ItemList products={products} />
                    
                </div>
            </Card>






        </div>

    )
}
export default ListPage;