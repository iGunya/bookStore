import BooksAction from "../types/action";
import {BookActionTypes} from "../action";
import {BooksState, IBook, ICartItem} from "../types/types";

const initialState: BooksState = {
    books: [],
    loading: true,
    error: "",
    cartItems: [],
    totalPrice: 0
}

const reducer = (state: BooksState = initialState, action: BooksAction): BooksState => {
    switch (action.type) {
        case BookActionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                books: [],
                loading: true,
                error: ""
            }
        case BookActionTypes.FETCH_BOOKS_REQUEST:
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: ""
            }
        case BookActionTypes.FETCH_BOOKS_ERROR:
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case BookActionTypes.ADD_BOOK_TO_CARD:
            const id: number = action.payload;
            const book: IBook = state.books.filter((e) => e.id === id)[0];
            const newCartItem: ICartItem = {
                id: book.id,
                name: book.title,
                count: 1,
                total: book.price
            }
            return {
                ...state,
                cartItems: [
                  ...state.cartItems,
                  newCartItem
                ],
                totalPrice: state.totalPrice + newCartItem.total
            }
        default:
            return state;
    }
}

export default reducer;