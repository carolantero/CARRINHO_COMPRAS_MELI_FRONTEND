import React from "react"
import CartButton from "../CartButton/CartButton"
import './Header.css'
import Logo from '../../assets/logo.svg'


function Header() {

    return (
      <header className="header" >
        <div className="header-container">
            <img src={Logo} alt="Logo"/>
            <CartButton/>
        </div>
      </header>
    )
  }
  
  export default Header