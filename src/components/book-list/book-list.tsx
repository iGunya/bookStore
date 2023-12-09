import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {RootState} from "../../srote";
import {connect} from "react-redux";
import {IBook} from "../../types/types";
import {withBookStoreService} from "../hoc/with-book-store-service";
import BookstoreService from "../../services/bookstore-service";
import {booksError, booksLoaded, booksRequested} from "../../action";
import Spinner from "../spiner";

import "./book-list.css"
import ErrorIndicator from "../error-indicator";

interface Props {
  books: IBook[]
  loading: boolean
  error: string
  bookstoreService: BookstoreService
  booksLoaded: (newBooks: IBook[]) => void
  booksRequested: () => void
  booksError: (error: string) => void
}


class BookList extends Component<Props> {

  componentDidMount() {

    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError} = this.props;

    booksRequested();
    bookstoreService.getBooks()
      .then( ( data: IBook[] ) => booksLoaded( data ) )
      .catch( ( error: string ) => booksError( error ) );
  }


  render() {
    const {books, loading, error} = this.props;

    if ( error !== "" ) {
      return (
        <ErrorIndicator/>
      )
    }

    return loading ? <Spinner/> : (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}>
                <BookListItem {...book} />
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    books: state.booksReducer.books,
    loading: state.booksReducer.loading,
    error: state.booksReducer.error
  }
}

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default withBookStoreService( connect( mapStateToProps, mapDispatchToProps )( BookList ) )