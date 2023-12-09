import React from "react";
import {Route, Routes} from "react-router-dom";
import {CardPage, HomePage} from "../pages";
import "./app.css";
import ShopHeader from "../shop-header";


const App: React.FC = (  ) => {

    return (
        <main role="main" className="container">
          <ShopHeader numItems={2} total={65} />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage/>}/>

                <Route
                    path="/cart"
                    element={<CardPage/>}/>
            </Routes>
        </main>
    );
};

export default App;