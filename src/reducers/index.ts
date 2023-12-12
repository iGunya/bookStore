import BooksAction from "../types/action";
import {BookActionTypes} from "../action";
import {BookList, BooksState, IBook, ICartItem} from "../types/types";

const updateCartItem = (item: ICartItem, book: IBook, quantity: number) => {

    if ( item ) {
        return  {
            id: item.id,
            name: item.name,
            count: item.count + quantity,
            total: item.total + quantity * book.price
        }
    }

    return {
        id: book.id,
        name: book.title,
        count: 1,
        total: book.price
    }
}

const updateCartItems = ( state: BooksState, item: ICartItem, idx: number ) => {

    const { shoppingCart: { cartItems }} = state;

    if (item.count === 0) {
        return [
            ...cartItems.slice( 0, idx ),
            ...cartItems.slice( idx + 1 )
        ]
    }

    if (idx < 0) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice( 0, idx ),
        item,
        ...cartItems.slice( idx + 1 )
    ]
}

const updateOrder = ( state: BooksState, id: number, quantity: number) => {
    const { bookList: { books }, shoppingCart: { cartItems, totalPrice }} = state;
    const book: IBook = books.filter((e) => e.id === id)[0];
    const itemIndex: number = cartItems.findIndex((e) => e.id === id);
    const item: ICartItem = cartItems[itemIndex];

    const newItem = updateCartItem(item, book, quantity);
    return {
        ...state,
        cartItems: updateCartItems(state, newItem, itemIndex),
        totalPrice: totalPrice + quantity * book.price
    }
}

const updateBookList = ( state: BooksState, action: BooksAction ): BookList => {
    if (state === undefined)
        return {
            books: [],
            loading: true,
            error: "",
            curPage: 1
        }

    switch (action.type) {
        case BookActionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state.bookList,
                books: [],
                loading: true,
                error: ""
            }
        case BookActionTypes.FETCH_BOOKS_REQUEST:
            return {
                ...state.bookList,
                books: action.payload,
                loading: false,
                error: ""
            }
        case BookActionTypes.FETCH_BOOKS_ERROR:
            return {
                ...state.bookList,
                books: [],
                loading: false,
                error: action.payload
            }
        case BookActionTypes.SET_CURRENT_PAGE:
            return {
                ...state.bookList,
                curPage: action.payload
            }
        default:
            return state.bookList
    }
}

const updateShoppingCart = ( state: BooksState, action: BooksAction ) => {
    if (state === undefined)
        return {
            cartItems: [],
            totalPrice: 0
        }

    switch (action.type) {
        case BookActionTypes.ADD_BOOK_TO_CARD: {
            return updateOrder(state, action.payload, 1);
        }
        case BookActionTypes.REMOVE_BOOK_FROM_CARD: {
            return updateOrder(state, action.payload, -1);
        }
        case BookActionTypes.ALL_REMOVE_BOOK_FROM_CARD: {
            const id: number = action.payload;
            const itemIndex: number = state.shoppingCart.cartItems.findIndex((e) => e.id === id);
            const item: ICartItem = state.shoppingCart.cartItems[itemIndex];
            return updateOrder(state, action.payload, -item.count);
        }
        default:
            return state.shoppingCart;
    }
}

const reducer = (state: BooksState, action: BooksAction): BooksState => {

    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
}

export default reducer;