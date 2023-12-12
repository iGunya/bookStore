import BooksAction from "../types/action"
import {IBook, IBooks} from "../types/types";
import BookstoreService from "../services/bookstore-service";
import {RootDispatch} from "../srote";

export enum BookActionTypes {
  FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST',
  FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
  ADD_BOOK_TO_CARD = 'ADD_BOOK_TO_CARD',
  REMOVE_BOOK_FROM_CARD = 'REMOVE_BOOK_FROM_CARD',
  ALL_REMOVE_BOOK_FROM_CARD = 'ALL_REMOVE_BOOK_FROM_CARD',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
}

const booksLoaded = (newBooks: IBook[]) : BooksAction => {
  return {
    type: BookActionTypes.FETCH_BOOKS_REQUEST,
    payload: newBooks
  }
}

const booksRequested = () : BooksAction => {
  return {
    type: BookActionTypes.FETCH_BOOKS_SUCCESS
  }
}

const booksError = ( error: string ) : BooksAction => {
  return {
    type: BookActionTypes.FETCH_BOOKS_ERROR,
    payload: error
  }
}

const addBookToCard = ( id: number ) : BooksAction => {
  return {
    type: BookActionTypes.ADD_BOOK_TO_CARD,
    payload: id
  }
}

const removeBookFromCart = ( id: number ) : BooksAction => {
  return {
    type: BookActionTypes.REMOVE_BOOK_FROM_CARD,
    payload: id
  }
}

const allRemoveBookFromCart = ( id: number ) : BooksAction => {
  return {
    type: BookActionTypes.ALL_REMOVE_BOOK_FROM_CARD,
    payload: id
  }
}

const setCurrentPage = ( page: number ) : BooksAction => {
  return {
    type: BookActionTypes.SET_CURRENT_PAGE,
    payload: page
  }
}

const fetchBooks = ( bookstoreService: BookstoreService, dispatch: RootDispatch ) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then( (data: IBook[]) => dispatch( booksLoaded( data ) ) )
    .catch( ( error: string ) => dispatch( booksError( error ) ) )
}

export {
  fetchBooks,
  addBookToCard,
  removeBookFromCart,
  allRemoveBookFromCart,
  setCurrentPage
}