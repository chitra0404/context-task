import React, {  useContext,  useState } from 'react';
import { CourseContext } from './App';



const CartItem=() =>{
    const {cartItems,addToCart,removeFromCart,calculateTotalPrice}=useContext(CourseContext);
  return (
   
<div className='row'>
    <h3>cart</h3>
{cartItems.cart.map((item,id)=>(
    <div className="card p-3 mb-2 bg-secondary-subtle text-emphasis-secondary" key={id} style={{width:30+"rem"}}>
 <img src={item.thumbnail}class="card-img-top" alt="..."/> 
  <div className="card-body p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">{item.description}</p>
  </div>
  <ul className="list-group list-group-flush p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
    <li className="list-group-item p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">price:{item.price}</li>
    <li className="list-group-item p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">Rating:{item.rating}</li>
    <li className="list-group-item p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">Total: ${calculateTotalPrice()}</li>
  </ul>
  <div className="card-body p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
  <button type="button" className="btn btn-outline-primary" onClick={() => removeFromCart(item.id)}>- </button>
  {item.quantity}
  <button type="button" className="btn btn-outline-primary" onClick={() => addToCart(item.id)}>+ </button>

  </div>
  </div>
   ))}

</div>

)
}

export default CartItem