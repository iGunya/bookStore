import React from "react";
import "./shop-header.css"
import {Link} from "react-router-dom";

interface Props {
  numItems: number,
  total: number
}

const ShopHeader: React.FC<Props> = ( { numItems, total }  ) => {
  return (
     <header className="shop-header row">
       <Link to="/">
        <div className="logo text-dark">BookStore</div>
       </Link>
       <Link to="/cart">
         <div className="shop-cart">
           <i className="cart-icon bi bi-cart3"/>
           {numItems} items (₽{total})
         </div>
       </Link>
     </header>
  )
}

export default ShopHeader