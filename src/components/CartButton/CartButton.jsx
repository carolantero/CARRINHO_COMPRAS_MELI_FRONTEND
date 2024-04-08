import React from "react"
import { BsCart2 } from "react-icons/bs";
import './CartButton.css'

function CartButton() {

    return (
      <button className="cart-button" type="button">
        <BsCart2 />
        <span className="cart-status">0</span>
      </button>
    )
  }
  
  export default CartButton