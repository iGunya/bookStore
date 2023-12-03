import { IBook } from "../types/types";

export default class BookstoreService {

    public getBooks() : IBook[]  {

        return [
            {
                id: 1,
                title: 'Чистый код',
                author: 'Роберт Мартин'
            },
            {
                id: 2,
                title: 'Паттерны Объектно-ориентированного проектирования',
                author: 'Э. Гамма, Р. Хелм, Р. Джонсон, Дж. Виссидес'
            },
            {
                id: 3,
                title: 'Чистая архитектура',
                author: 'Роберт Мартин'
            }
        ];
    }
}