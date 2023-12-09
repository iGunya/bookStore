import React from "react";
import {Route, Routes} from "react-router-dom";
import {CardPage, HomePage} from "../pages";
import "./app.css";


const App: React.FC = (  ) => {

    return (
        <main role="main" className="container">
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