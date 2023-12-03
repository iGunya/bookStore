import BooksAction from "../types/action"
import {IBook, IBooks} from "../types/types";

export enum BookActionTypes {
  BOOKS_LOADED = 'BOOKS_LOADED'
}

const booksLoaded = (newBooks: IBook[]) : BooksAction => {
  return {
    type: BookActionTypes.BOOKS_LOADED,
    payload: newBooks
  }
}

export {
  booksLoaded
}