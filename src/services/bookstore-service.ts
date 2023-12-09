import { IBook } from "../types/types";

export default class BookstoreService {

    data: IBook[] = [
        {
            id: 1,
            title: 'Чистый код',
            author: 'Роберт Мартин',
            price: 772,
            imgUri: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/179/593/445/572/111/11/600005154648b0.jpg"
        },
        {
            id: 2,
            title: 'Паттерны Объектно-ориентированного проектирования',
            author: 'Э. Гамма, Р. Хелм, Р. Джонсон, Дж. Виссидес',
            price: 1103,
            imgUri: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/114/850/158/372/111/10/600004753822b0.jpg"
        },
        {
            id: 3,
            title: 'Чистая архитектура',
            author: 'Роберт Мартин',
            price: 890,
            imgUri:"https://main-cdn.sbermegamarket.ru/big2/hlr-system/-10/180/370/769/817/4/100024834523b0.jpg"
        }
    ];

    public getBooks() : Promise<IBook[]>  {

        return new Promise( (resolve) => {
            setTimeout( () => {
                resolve(this.data)
            }, 800 )
          }
        )
    }
}