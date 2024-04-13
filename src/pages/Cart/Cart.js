import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../Context/ShopContext'
import CartItem from './CartItem'
import './CartItem.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems,getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !==0){
            return <CartItem data={product}/>
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart