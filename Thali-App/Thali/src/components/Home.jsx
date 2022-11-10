
import React from 'react'
import Itemcard from './Itemcard'
import Data from './Data'
import { Link } from "react-router-dom";




const Home = () => {
    
  return (
    
    


    <div style={{border:'32px solid green', margin:'10px'}}>
<h1 className='text-center mt-3'>THALI APP</h1>
<h2 style={{color:'brown' ,textAlign:'center'}}>Place your order here</h2><br/>
<button className='btn btn-warning ' style={{float:" right" ,padding:'15px',border:'5px solid black'}}><Link to="/Cart">Checkout Here</Link></button><br/>
<section className='py-4 container'>
    <div className='row justify-content-center'>

{Data.ProductData.map((item,index)=>{
    return(
<Itemcard
 img={item.img} 
 title={item.title} 
 desc={item.desc}
  price={item.price} 
  item={item}
   key={index}/>
    )

})}

    </div>
</section>

    </div>
  )
}

export default Home