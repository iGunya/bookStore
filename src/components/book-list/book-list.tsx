import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {RootDispatch, RootState} from "../../srote";
import {connect} from "react-redux";
import {IBook} from "../../types/types";
import {withBookStoreService} from "../hoc/with-book-store-service";
import BookstoreService from "../../services/bookstore-service";
import {fetchBooks, addBookToCard, setCurrentPage} from "../../action";
import Spinner from "../spiner";

import "./book-list.css"
import ErrorIndicator from "../error-indicator";
import {Pagination} from "@mui/material";

interface StateProps {
  books: IBook[]
  loading: boolean
  error: string
  curPage: number
}

interface DispatchProps {
  fetchBooks: () => void,
  onAddToCard: (id: number) => void
  setCurrentPage: (page: number) => void
}

interface OwnProps {
  bookstoreService: BookstoreService
}

type Props = StateProps & DispatchProps & OwnProps;

const COUNT_BOOK_ON_PAGE = 3;

const BookList: React.FC<Pick<Props, "books" | "onAddToCard" | "curPage" | "setCurrentPage">> = (
  { books, onAddToCard, curPage, setCurrentPage } ) => {

  const startIdx = ( curPage - 1 ) * COUNT_BOOK_ON_PAGE;
  const allPages = Math.ceil( books.length / COUNT_BOOK_ON_PAGE );

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(value);
    setCurrentPage(value);
  };

  return (
    <div className="book-list-container">
      <ul className="book-list">
        {
          books.slice( startIdx, startIdx + COUNT_BOOK_ON_PAGE ).map((book) => {
            return (
              <li key={book.id}>
                <BookListItem book={book}
                onAddToCard={ () => onAddToCard(book.id) }/>
              </li>
            )
          })
        }
      </ul>
      <div className="book-pagination">
        <Pagination
          count={allPages}
          siblingCount={1}
          page={curPage}
          variant="outlined"
          onChange={handleChangePage}/>
      </div>
    </div>
  )
}

class BookListContainer extends Component<Props> {

  componentDidUpdate(prevProps: Props) {
    if (this.props.curPage !== prevProps.curPage) {
      this.props.fetchBooks();
    }
  }

  componentDidMount() {
    this.props.fetchBooks();
  }


  render() {
    const {books, loading, error, curPage} = this.props;
    const {onAddToCard, setCurrentPage} = this.props;

    if ( error !== "" ) {
      return (
        <ErrorIndicator errorText={error}/>
      )
    }

    return loading ? <Spinner/> :
      <BookList
        books={books}
        onAddToCard={onAddToCard}
        curPage={curPage}
        setCurrentPage={setCurrentPage}/>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    books: state.booksReducer["bookList"]["books"],
    loading: state.booksReducer["bookList"]["loading"],
    error: state.booksReducer["bookList"]["error"],
    curPage: state.booksReducer["bookList"]["curPage"]
  }
}

const mapDispatchToProps = (dispatch: RootDispatch, { bookstoreService }: OwnProps) => {
  return {
    fetchBooks: fetchBooks( bookstoreService, dispatch ),
    onAddToCard: (id: number) => dispatch( addBookToCard( id ) ),
    setCurrentPage: (page: number) => dispatch( setCurrentPage( page ) )
  }
};

export default withBookStoreService( connect( mapStateToProps, mapDispatchToProps )( BookListContainer ) )