import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import CartPage from './pages/CartPage/CartPage'

function App() {

  return (
    <div>
      <Header/>
      <HomePage/>
      <CartPage/>
      <Footer/>
    </div>
  )
}

export default App
