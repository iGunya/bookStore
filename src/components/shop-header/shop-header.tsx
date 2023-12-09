import React from "react";
import "./shop-header.css"

interface Props {
  numItems: number,
  total: number
}

const ShopHeader: React.FC<Props> = ( { numItems, total }  ) => {
  return (
     <header className="shop-header row">
       <a className="logo text-dark" href="#">BookStore</a>
       <a className="shop-cart">
         <i className="cart-icon bi bi-cart3"/>
         {numItems} items (${total})
       </a>
     </header>
  )
}

export default ShopHeader