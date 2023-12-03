import {ComponentType, useContext} from "react";
import {SimpleContext} from "../bookstore-service-context/bookstore-service-context";
import BookstoreServiceHoCTypes from "../../types/BookstoreServiceHoCTypes";

export function withBookStoreService <P extends BookstoreServiceHoCTypes>(Wrapped: ComponentType<P> ) {
    return (props: Pick<P, Exclude<keyof P, keyof BookstoreServiceHoCTypes>>) => {
        const { bookstoreService } = useContext( SimpleContext );

        return (
            <Wrapped {...props as P} bookstoreService={ bookstoreService }/>
        )
    };
}

// export function withBookStoreService(): <P extends BookstoreServiceHoCTypes>(Wrapped: ComponentType<P> ) => ComponentClass<P> {
//     return <P extends BookstoreServiceHoCTypes>(Wrapped: ComponentType<P>) =>
//         class BookstoreServiceComponent extends Component<P>{
//             render() {
//                 const {bookstoreService} = useContext(SimpleContext);
//                 return (
//                     <Wrapped {... this.props} bookstoreService = {bookstoreService} />
//                 )
//             }
//         }
// }