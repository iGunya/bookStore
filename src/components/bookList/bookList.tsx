import React, {Component} from "react";
import BookListItem from "../bookListItem";
import {RootState} from "../../srote";
import {connect} from "react-redux";
import {IBook} from "../../types/types";

interface Props {
  books: IBook[]
}

class BookList extends Component<Props> {

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
  console.log(state.booksReducer);
  return {
    books: state.booksReducer.books
  }
}

export default connect( mapStateToProps )( BookList )