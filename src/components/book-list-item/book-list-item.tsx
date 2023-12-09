import {IBook} from "../../types/types";
import "./book-list-item.css"

interface Props {
  book: IBook;
  onAddToCard: () => void;
}

export const BookListItem: React.FC<Props> = (props: Props) => {

  const {book, onAddToCard} = props;

  return (
    <div className="book-list-item">
        <div className="book-cover">
            <img src={book.imgUri} alt="cover"/>
        </div>
        <div className="book-details">
            <a href="#" className="book-title">{book.title}</a>
            <div className="book-author">{book.author}</div>
            <div className="book-price">{book.price}</div>
            <button className="btn btn-info add-to-card"
            onClick={() => onAddToCard()}>
              Добавить в корзину
            </button>
        </div>
    </div>
  )
}