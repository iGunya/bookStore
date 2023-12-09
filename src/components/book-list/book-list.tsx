import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {RootDispatch, RootState} from "../../srote";
import {connect} from "react-redux";
import {IBook} from "../../types/types";
import {withBookStoreService} from "../hoc/with-book-store-service";
import BookstoreService from "../../services/bookstore-service";
import {fetchBooks} from "../../action";
import Spinner from "../spiner";

import "./book-list.css"
import ErrorIndicator from "../error-indicator";

interface StateProps {
  books: IBook[]
  loading: boolean
  error: string
}

interface DispatchProps {
  fetchBooks: () => void
}

interface OwnProps {
  bookstoreService: BookstoreService
}

type Props = StateProps & DispatchProps & OwnProps;

const BookList: React.FC<Pick<StateProps, "books">> = ( { books } ) => {
  return (
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

class BookListContainer extends Component<Props> {

  componentDidMount() {
    this.props.fetchBooks();
  }


  render() {
    const {books, loading, error} = this.props;

    if ( error !== "" ) {
      return (
        <ErrorIndicator/>
      )
    }

    return loading ? <Spinner/> : <BookList books={books} />
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    books: state.booksReducer.books,
    loading: state.booksReducer.loading,
    error: state.booksReducer.error
  }
}

const mapDispatchToProps = (dispatch: RootDispatch, { bookstoreService }: OwnProps) => {
  return {
    fetchBooks: fetchBooks( bookstoreService, dispatch )
  }
};

export default withBookStoreService( connect( mapStateToProps, mapDispatchToProps )( BookListContainer ) )