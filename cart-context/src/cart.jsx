import React, {  useContext,  useState } from 'react';
import { CourseContext } from './App';


const Cart = () => {
    const {cartItems,addToCart,removeFromCart,calculateTotalPrice }=useContext(CourseContext);

    console.log('cartItems:', cartItems);

 
 
 
  




  return (

   
    <div className="row ">

     
  <h1>Shopping</h1>
      { cartItems. products.map((item,id) => (
       <div className="card p-3 mb-2 bg-dark-subtle text-emphasis-dark" key={id} style={{width:18+"rem"}}>
     <img src={item.thumbnail} className="card-img-top" alt="..."/> 
       <div className="card-body p-3 mb-2 bg-dark-subtle text-emphasis-dark">
         <h5 className="card-title">{item.title}</h5>
         <p className="card-text">{item.description}</p>
       </div>
       <ul className="list-group list-group-flush p-3 mb-2 bg-dark-subtle text-emphasis-dark">
         <li className="list-group-item p-3 mb-2 bg-dark-subtle text-emphasis-dark">Price:{item.price}</li>
         <li className="list-group-item p-3 mb-2 bg-dark-subtle text-emphasis-dark">Rating:{item.rating}</li>
         <li className="list-group-item p-3 mb-2 bg-dark-subtle text-emphasis-dark">Brand:{item.brand}</li>
       </ul>
       <div className="card-body p-3 mb-2 bg-dark-subtle text-emphasis-dark">
       <button type="button" className="btn btn-outline-primary" onClick={() => addToCart(item.id)}>add</button>
       <button type="button" className="btn btn-outline-primary" onClick={() => removeFromCart (item.id)}>remove</button>
       
       {/* Quantity:{' '}
       <button type="button" className="btn btn-outline-primary" onClick={() => addToCart(item.id)}>-</button>{' '}
       
       {cartItems.products.length}{' '}
       <button type="button" className="btn btn-outline-primary" onClick={() => removeFromCart(item.id)}>+</button> */}
         
       
       </div>

       </div>
      ))}
    </div>
      
  );
}

export default Cart
