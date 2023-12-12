import { IBook } from "../types/types";

export default class BookstoreService {

    data: IBook[] = [
        {
            id: 1,
            title: 'Высоконагруженные приложения. Программирование, масштабирование, поддержка',
            author: 'Клеппман Мартин',
            price: 2950,
            imgUri:"https://main-cdn.sbermegamarket.ru/big2/hlr-system/-10/224/740/139/817/4/100024834085b0.jpg"
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
        },
        {
            id: 4,
            title: 'Kubernetes в действии',
            author: 'Марко Лукша',
            price: 1599,
            imgUri:"https://dmkpress.com/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/978-5-97060-657-5-new_270_369_jpg__100.jpg"
        },
        {
            id: 5,
            title: 'Стильный Java. Код который работает всегда и везде',
            author: 'Марко Фаэлла',
            price: 1918,
            imgUri:"https://main-cdn.sbermegamarket.ru/big2/hlr-system/543/556/671/713/173/600003939883b0.jpeg"
        },
        {
            id: 6,
            title: 'Java Concurrency на практике',
            author: 'Брайан Гетц',
            price: 1454,
            imgUri: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/543/380/808/122/115/38/600003939826b0.jpg"
        },
        {
            id: 7,
            title: 'Spring в действии',
            author: 'Уоллс Крейг',
            price: 1999,
            imgUri:"https://dmkpress.com/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/978-5-93700-112-2_270_369_jpg__100.jpg"
        },
        {
            id: 8,
            title: 'Java. Эффективное программирование',
            author: 'Джошуа Блох',
            price: 3068,
            imgUri:"https://main-cdn.sbermegamarket.ru/big2/hlr-system/1481104724/100024869202b0.jpg"
        },
        {
            id: 9,
            title: 'Чистый код',
            author: 'Роберт Мартин',
            price: 772,
            imgUri: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/179/593/445/572/111/11/600005154648b0.jpg"
        },
        {
            id: 10,
            title: 'Apache Kafka. Потоковая обработка и анализ данных',
            author: 'Шапира Гвен, Сиварам Раджини, Палино Тодд',
            price: 1761,
            imgUri:"https://main-cdn.sbermegamarket.ru/big2/hlr-system/-10/216/956/031/014/154/2/100024834139b0.jpg"
        },
        {
            id: 11,
            title: 'Грокаем функциональное мышление',
            author: 'Норманд Эрнест',
            price: 2015,
            imgUri:"https://main-cdn.sbermegamarket.ru/big2/hlr-system/163/834/824/411/610/2/600009972876b0.jpeg"
        },
        {
            id: 12,
            title: 'KAFKA в действии',
            author: 'Скотт Дилан, Гамов Виктор, Клейн Дейв',
            price: 2499,
            imgUri:"https://main-cdn.sbermegamarket.ru/big2/hlr-system/174/911/876/792/117/5/600008955019b0.jpeg"
        },
        {
            id: 13,
            title: 'Микросервисы Spring в действии',
            author: 'Карнелл Джон, Санчес Иллари Уайлупо',
            price: 2999,
            imgUri:"https://main-cdn.sbermegamarket.ru/big2/hlr-system/202/893/294/152/618/21/600006679458b0.jpeg"
        },
        {
            id: 14,
            title: 'Криптографические основы блокчейн-технологий',
            author: 'Ищукова Евгения Александровна, Романенко Кирилл Сергеевич, Панасенко Сергей Петрович',
            price: 1500,
            imgUri:"https://main-cdn.sbermegamarket.ru/big2/hlr-system/182/046/392/891/939/100034300827b0.jpg"
        },
        {
            id: 15,
            title: 'Istio in Action',
            author: 'Christian PostaRinor MalokuLaurence Erwin, Elisabeth Faure',
            price: 2685,
            imgUri:"https://images.manning.com/360/480/resize/book/9/c4c70b2-b6c8-4061-8ad3-8f503689ffdd/Posta-Istio-HI.png"
        },
        {
            id: 16,
            title: 'Istio: приступаем к рботе',
            author: 'Ли Калькот, Зак Бутчер',
            price: 1099,
            imgUri:"https://dmkpress.com/images/cms/thumbs/a5b0aeaa3fa7d6e58d75710c18673bd7ec6d5f6d/978-5-97060-863-0_270_369_jpg__100.jpg"
        }
    ];

    public getBooks() : Promise<IBook[]>  {

        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (Math.random() > 0.75)
                    reject(new Error("Все плохо"))
                else
                    resolve(this.data)
            }, 800 )
          }
        )
    }
}