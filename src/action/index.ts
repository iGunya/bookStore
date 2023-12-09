import BooksAction from "../types/action"
import {IBook, IBooks} from "../types/types";

export enum BookActionTypes {
  BOOKS_LOADED = 'BOOKS_LOADED',
  BOOKS_REQUESTED = 'BOOKS_REQUESTED'
}

const booksLoaded = (newBooks: IBook[]) : BooksAction => {
  return {
    type: BookActionTypes.BOOKS_LOADED,
    payload: newBooks
  }
}

const booksRequested = () : BooksAction => {
  return {
    type: BookActionTypes.BOOKS_REQUESTED
  }
}

export {
  booksLoaded,
  booksRequested
}