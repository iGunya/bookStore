import BooksLoadedAction from "../types/action"
import {IBooks} from "../types/types";

const booksLoaded = (newBooks: IBooks) : BooksLoadedAction => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
}

export {
  booksLoaded
}