import React from "react";
import "./shop-header.css"
import {Link} from "react-router-dom";
import {RootState} from "../../srote";
import {connect} from "react-redux";

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
           {numItems} товаров в корзине (₽{total})
         </div>
       </Link>
     </header>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    // @ts-ignore
    numItems: state.booksReducer["shoppingCart"]["cartItems"].length,
    total: state.booksReducer["shoppingCart"]["totalPrice"],
  }
}

export default connect( mapStateToProps )( ShopHeader )