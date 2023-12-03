import React from "react";
import BookstoreService from "../../services/bookstore-service";
import BookstoreServiceHoCTypes from "../../types/BookstoreServiceHoCTypes";

const initContext =  { bookstoreService: new BookstoreService() }

export const SimpleContext = React.createContext<BookstoreServiceHoCTypes>(initContext );

export const SimpleService = ({children}: {children: React.ReactNode} ) => {

    return (
       <SimpleContext.Provider value={ initContext } >
        {children}
       </SimpleContext.Provider>
    )
}