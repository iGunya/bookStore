import React from "react";
import {Route, Routes} from "react-router-dom";
import {CardPage, HomePage} from "../pages";
import "./app.css";
import ShopHeader from "../shop-header";
import ShopFooter from "../shop-footer/shop-footer";


const App: React.FC = (  ) => {

    return (
        <main role="main" className="container">
          <ShopHeader/>
          <Routes>
              <Route
                  path="/"
                  element={<HomePage/>}/>

              <Route
                  path="/cart"
                  element={<CardPage/>}/>
          </Routes>
          <ShopFooter/>
        </main>
    );
};

export default App;