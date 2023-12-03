import BooksLoadedAction from "../types/action";
import { IBooks } from "../types/types";

const initialState: IBooks = {
    books: [
        {
            id: 1,
            title: 'ДА',
            author: 'Yes'
        },
        {
            id: 2,
            title: 'Нет',
            author: 'No'
        }
    ]
}

const reducer = (state = initialState, action: BooksLoadedAction): IBooks => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            }
        default:
            return state;
    }
}

export default reducer;