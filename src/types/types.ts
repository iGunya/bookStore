import React from "react";

export default interface Props {
    children?: React.ReactNode;
}

export interface IBook {
  id: number,
  title: string,
  author: string,
  price: number,
  imgUri: string
}
export interface ICartItem {
  id: number,
  name: string,
  count: number,
  total: number,
}

export interface IBooks extends Props {
  books: IBook[]
}

export interface ICartItems extends Props {
  cartItems: ICartItem[]
}

export interface ILoading {
  loading: boolean
}

export interface IError {
  error: string
}

export interface ITotalPrice {
  totalPrice: number
}

export type BooksState =
  & IBooks
  & ILoading
  & IError
  & ICartItems
  & ITotalPrice