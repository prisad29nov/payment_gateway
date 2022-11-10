import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useCart} from 'react-use-cart'

const Itemcard = (props) => {
    const { addItem }=useCart();



  return (
  
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title>Rs.{props.price}</Card.Title>
        <Card.Text>
          {props.des}
        </Card.Text>
        <Button variant="primary" onClick={()=>{addItem(props.item)}}>ADD to CART</Button>
      </Card.Body>
    </Card>
  );
}


export default Itemcard