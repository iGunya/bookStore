import React from "react";

export default interface Props {
    children?: React.ReactNode;
}

export interface IBook{
  id: number,
  title?: string,
  author?: string
}

export interface IBooks extends Props{
  books: IBook[]
}