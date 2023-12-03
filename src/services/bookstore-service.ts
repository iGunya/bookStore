import { IBook } from "../types/types";

export default class BookstoreService {

    public getBooks() : IBook[]  {

        return [
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
        ];
    }
}