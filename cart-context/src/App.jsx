import { createContext, useState } from 'react'
import CartItem from './cartItem'
import './App.css'
import Cart from './cart'



import { data } from "./data";

export const CourseContext=createContext({id:0,title:null, rating:0,price:0
});



function App() {
 
  const [cartItems, setCartItems] = useState({products:data,cart:[]});

  const addToCart = (productId) => {
    const productToAdd = cartItems.products.find((product) => product.id === productId);

    // Check if the product is already in the cart
    const isProductInCart = cartItems.cart.some((item) => item.id === productId);

    if (isProductInCart) {
      // If the product is already in the cart, increment its quantity
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        cart: prevCartItems.cart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }));
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems((prevCartItems) => ({
        ...prevCartItems,
        cart: [...prevCartItems.cart, { ...productToAdd, quantity: 1 }],
      }));
    }
  };

  // Function to decrement the quantity of a product in the cart
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      cart: prevCartItems.cart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      ),
    }));
  };
  const calculateTotalPrice = () => {
    return cartItems.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
<div>
    <CourseContext.Provider value={{cartItems,addToCart,removeFromCart,calculateTotalPrice }}>
      <CartItem/>
      <Cart></Cart>
      
    </CourseContext.Provider>
     
    
   </div>
  )
}

export default App
