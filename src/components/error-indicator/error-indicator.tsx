import React from "react";
import "./error-indicator.css"
import {Alert} from "@mui/material";

interface Props {
  errorText: string
}

const ErrorIndicator: React.FC<Props> = (props: Props) => {
    return (
        <div>
          <Alert variant="filled" severity="error">
            {props.errorText}
          </Alert>
        </div>
    );
};

export default ErrorIndicator;