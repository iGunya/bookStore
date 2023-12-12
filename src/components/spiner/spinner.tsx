import React from "react";

import "./spiner.css"
import {CircularProgress} from "@mui/material";

const Spinner: React.FC = () => {
    return (
        <div className="book-spinner">
          <CircularProgress color="inherit" />
        </div>
    )
};

export default Spinner;