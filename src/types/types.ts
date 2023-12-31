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

export type BookList =
  & IBooks
  & ILoading
  & IError
  & ICurrentPage

export interface ITotalPrice {
  totalPrice: number,
}

export interface ILoading {
  loading: boolean,
}

export interface ICurrentPage {
  curPage: number,
}

export interface IError {
  error: string,
}

export type ShoppingCart =
  & ICartItems
  & ITotalPrice

export interface BooksState {
  bookList: BookList,
  shoppingCart: ShoppingCart
}