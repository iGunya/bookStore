import {combineReducers, createStore} from "redux";

import reducer from "./reducers";

const rootReducer = combineReducers( {
  booksReducer: reducer
} );

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;