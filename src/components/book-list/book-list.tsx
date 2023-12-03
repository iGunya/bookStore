import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {RootState} from "../../srote";
import {connect} from "react-redux";
import {IBook} from "../../types/types";
import {withBookStoreService} from "../hoc/with-book-store-service";
import BookstoreService from "../../services/bookstore-service";
import {booksLoaded} from "../../action";

interface Props {
  books: IBook[]
  bookstoreService: BookstoreService
  booksLoaded: (newBooks: IBook[]) => void
}


class BookList extends Component<Props> {

  componentDidMount() {
    const data = this.props.bookstoreService.getBooks();
    console.log( data )

    this.props.booksLoaded(data)
  }


  render() {
    const {books} = this.props;

    return (
      <ul>
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
    books: state.booksReducer.books
  }
}

const mapDispatchToProps = {
  booksLoaded
};

export default withBookStoreService( connect( mapStateToProps, mapDispatchToProps )( BookList ) )