import React from "react";

export default interface Props {
    children?: React.ReactNode;
}

export interface IBook {
  id: number,
  title?: string,
  author?: string,
  price: number,
  imgUri: string
}

export interface IBooks extends Props {
  books: IBook[]
}

export interface ILoading {
  loading: boolean
}

export interface IError {
  error: string
}

export type BooksState =
  & IBooks
  & ILoading
  & IError