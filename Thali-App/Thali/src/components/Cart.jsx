import { Button } from 'bootstrap';
import React from 'react'
import { useCart } from 'react-use-cart'
import axios from 'axios'
import { Link } from "react-router-dom";

const Cart = () => {
const {isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
}=useCart();
if(isEmpty) return <h1>Your cart is Empty........<button className='btn btn-warning ' style={{float:" center" ,padding:'25px',border:'5px solid black'}}><Link to="/">Return to main menu</Link></button><br/></h1>
const initPayment=(data)=>{
    const options={
        key:"rzp_test_MEaFmlMWS0snwP",
        amount:data.amount,currency:data.currency,
        ordre_id:data.id,
        handler :async(response)=>{
            try{
                const verifyUrl="http://localhost:9000/api/payment/verify" ;
                const {data} =await axios.post(verifyUrl,response)
                console.log(data)
            }
            catch(error){
                console.log(error)
            }
        },
        theme:{
            color:"#3399cc"
        }

    }
    const rzp1=new window.Razorpay(options);
    rzp1.open();
}
const handlePayment =async()=>{
    try{
       const orderUrl="http://localhost:9000/api/payment/orders" ;
       const {data}=await axios.post(orderUrl,{amount:cartTotal})
       console.log(data)
       initPayment(data.data);
    }
    catch(error){
        console.log(error)
    }
}

  return (
    <section className='py-4 container'>
        <div className='row justify-content-center'>
        <div className='col-12'>
        <h4>Cart ({totalUniqueItems}) Total Items:({totalItems})</h4>
        <table className='table table-light table-hover m-0'>
<tbody>
    {items.map((item,index)=>{
        return(
            <tr key={index}>
            
            <td style={{height:"100px"}}>{item.img}</td>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>    Quantity({item.quantity})</td>
            
            <td>
                <button className='btn btn-info ms-2' 
                onClick={()=>{updateItemQuantity(item.id,item.quantity-1) }}>-</button>
                <button className='btn btn-info ms-2'  onClick={()=>{updateItemQuantity(item.id,item.quantity+1) }}>+</button>
                <button className='btn btn-danger ms-2' onClick={()=>{removeItem(item.id)}}>Remove item</button>
            </td>
            </tr>
            
        )

    })}
</tbody>
        </table><br></br>
        <span >
            <h1>Total Price : Rs.{cartTotal}</h1>
     
        <span className='col-auto ' ><button className='btn btn-danger ms-2' onClick={()=>{emptyCart()}}>Clear cart</button>
        <button className='btn btn-warning ms-2'onClick={handlePayment}>Buy now</button></span>
        </span>
        </div>
        </div>
        <button className='btn btn-warning ' style={{float:" right" ,padding:'15px',border:'5px solid black'}}><Link to="/">Return to main menu</Link></button><br/>

    </section>
    
  )
}

export default Cart