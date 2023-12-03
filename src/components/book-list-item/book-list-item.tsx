import { Fragment } from "react";
import { IBook } from "../../types/types";
 
export const BookListItem: React.FC<IBook> = (book: IBook) => {
  return (
    <Fragment>
      <span>{book.title}</span>
      <span>{book.author}</span>
    </Fragment>
  )
}