import React from "react";
import "./shop-footer.css"
import {Link} from "react-router-dom";
import {RootState} from "../../srote";
import {connect} from "react-redux";

interface Props {
  numItems: number,
  total: number
}

const ShopFooter: React.FC<Props> = () => {
  return (
     <footer className="shop-footer row">
       <div className="text-center p-3 footer-created">
         © 2023 Create by: Алексей Кузнецов
       </div>
       <div className="social-link">
         <a className="btn btn-primary btn-floating m-1 github-link"
            href="#!"
            role="button">
           <i className="bi bi-github"/>
         </a>
         <a className="btn btn-primary btn-floating m-1 telegram-link"
            href="#!"
            role="button">
           <i className="bi bi-telegram"/>
         </a>
       </div>
     </footer>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    // @ts-ignore
    numItems: state.booksReducer["shoppingCart"]["cartItems"].length,
    total: state.booksReducer["shoppingCart"]["totalPrice"],
  }
}

export default connect( mapStateToProps )( ShopFooter )