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
        case BookActionTypes.FETCH_BOOKS_SUCCESS:
            return {
                books: [],
                loading: true,
                error: ""
            }
        case BookActionTypes.FETCH_BOOKS_REQUEST:
            return {
                books: action.payload,
                loading: false,
                error: ""
            }
        case BookActionTypes.FETCH_BOOKS_ERROR:
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