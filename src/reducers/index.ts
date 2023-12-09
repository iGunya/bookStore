import BooksAction from "../types/action";
import {BookActionTypes} from "../action";
import {BooksState} from "../types/types";

const initialState: BooksState = {
    books: [],
    loading: true
}

const reducer = (state = initialState, action: BooksAction): BooksState => {
    switch (action.type) {
        case BookActionTypes.BOOKS_REQUESTED:
            return {
                books: [],
                loading: true
            }
        case BookActionTypes.BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default reducer;