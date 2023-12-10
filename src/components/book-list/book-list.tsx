import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {RootDispatch, RootState} from "../../srote";
import {connect} from "react-redux";
import {IBook} from "../../types/types";
import {withBookStoreService} from "../hoc/with-book-store-service";
import BookstoreService from "../../services/bookstore-service";
import {fetchBooks, addBookToCard} from "../../action";
import Spinner from "../spiner";

import "./book-list.css"
import ErrorIndicator from "../error-indicator";

interface StateProps {
  books: IBook[]
  loading: boolean
  error: string
}

interface DispatchProps {
  fetchBooks: () => void,
  onAddToCard: (id: number) => void
}

interface OwnProps {
  bookstoreService: BookstoreService
}

type Props = StateProps & DispatchProps & OwnProps;

const BookList: React.FC<Pick<Props, "books" | "onAddToCard">> = ( { books, onAddToCard } ) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book}
              onAddToCard={ () => onAddToCard(book.id) }/>
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
    const {onAddToCard} = this.props;

    if ( error !== "" ) {
      return (
        <ErrorIndicator/>
      )
    }

    return loading ? <Spinner/> :
      <BookList
        books={books}
        onAddToCard={onAddToCard}/>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    books: state.booksReducer["bookList"]["books"],
    loading: state.booksReducer["bookList"]["loading"],
    error: state.booksReducer["bookList"]["error"]
  }
}

const mapDispatchToProps = (dispatch: RootDispatch, { bookstoreService }: OwnProps) => {
  return {
    fetchBooks: fetchBooks( bookstoreService, dispatch ),
    onAddToCard: (id: number) => dispatch( addBookToCard( id ) )
  }
};

export default withBookStoreService( connect( mapStateToProps, mapDispatchToProps )( BookListContainer ) )