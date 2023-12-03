import BooksAction from "../types/action";
import { IBooks } from "../types/types";
import {BookActionTypes} from "../action";

const initialState: IBooks = {
    books: []
}

const reducer = (state = initialState, action: BooksAction): IBooks => {
    switch (action.type) {
        case BookActionTypes.BOOKS_LOADED:
            return {
                books: action.payload
            }
        default:
            return state;
    }
}

export default reducer;