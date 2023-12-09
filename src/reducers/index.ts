import BooksAction from "../types/action";
import {BookActionTypes} from "../action";
import {BooksState} from "../types/types";

const initialState: BooksState = {
    books: [],
    loading: true,
    error: ""
}

const reducer = (state = initialState, action: BooksAction): BooksState => {
    switch (action.type) {
        case BookActionTypes.BOOKS_REQUESTED:
            return {
                books: [],
                loading: true,
                error: ""
            }
        case BookActionTypes.BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false,
                error: ""
            }
        case BookActionTypes.BOOKS_ERROR:
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer;