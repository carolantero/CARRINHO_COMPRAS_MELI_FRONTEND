import React, {useState, useEffect} from "react"
import './Products.css'
import ProductCard from "./ProductCard"
import getAllProducts from "../../api/apiShoppingCart"

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((result) => {
      setProducts(result)
    })
  }, []);


  return (
    <div className="products">
      {
      products.map((product) => <ProductCard key={product.product_id} data={product}/>)
      }
    </div>
  )
}
  
  export default Products