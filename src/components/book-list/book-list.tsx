import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {RootState} from "../../srote";
import {connect} from "react-redux";
import {IBook} from "../../types/types";
import {withBookStoreService} from "../hoc/with-book-store-service";
import BookstoreService from "../../services/bookstore-service";
import {booksLoaded, booksRequested} from "../../action";
import Spinner from "../spiner";

import "./book-list.css"

interface Props {
  books: IBook[]
  loading: boolean
  bookstoreService: BookstoreService
  booksLoaded: (newBooks: IBook[]) => void
  booksRequested: () => void
}


class BookList extends Component<Props> {

  componentDidMount() {

    const { bookstoreService, booksLoaded, booksRequested } = this.props;

    booksRequested();
    bookstoreService.getBooks()
      .then( ( data: IBook[] ) => booksLoaded( data ) );
  }


  render() {
    const {books, loading} = this.props;

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
    loading: state.booksReducer.loading
  }
}

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default withBookStoreService( connect( mapStateToProps, mapDispatchToProps )( BookList ) )