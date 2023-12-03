import React from "react";
import {Route, Routes} from "react-router-dom";
import {CardPage, HomePage} from "../pages";
import "./app.css";


const App: React.FC = (  ) => {

    return (
        <Routes>
            <Route
                path="/"
                element={<HomePage/>}/>

            <Route
                path="/cart"
                element={<CardPage/>}/>
        </Routes>
    );
};

export default App;