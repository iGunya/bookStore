import React, {useContext} from "react";
import SimpleContex from "../bookstore-service-context";

export const useSimpleContext = () => {
  return useContext(SimpleContex)
}