import React from "react"
import {BookList} from "../book-list";
import ShopCartTable from "../shop-cart-table";

const HomePage: React.FC = () => {

  return (
    <div>
      <BookList/>
      <ShopCartTable />
    </div>
  )
}

export default HomePage;