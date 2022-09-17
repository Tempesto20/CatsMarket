import React from 'react'
import ten from '../assets/img/10000.jpg';
import twenty from '../assets/img/20000.jpg';
import twentyFive from '../assets/img/25000.jpg';
import thirty from '../assets/img/30000.jpg';
import thirtyOne from '../assets/img/30000-1.jpg';
import fourty from '../assets/img/40000.jpg';
import like from '../assets/img/svg/like.svg';


const CatBlock = React.createContext(
    [
        {
            id: 1,
            price: 30000,
            img: thirty,
            discount: 40,
            name: 'Эверетт',
            age: 2,
            buy: 'Купить',
            like: like,
            isSell: false,
            isFavorite: false
        },
        {
            id: 2,
            price: 40000,
            img: fourty ,
            discount: 0,
            name: 'Генри',
            age: 3,
            buy: 'Продан',
            like: like,
            isSell: true,
            isFavorite: true
        },
        {
            id: 3,
            price: 20000,
            img: twenty,
            discount: 0,
            name: 'Чарли',
            age: 9,
            buy: 'Купить',
            like: like,
            isSell: false,
            isFavorite: false
        },
        {
            id: 4,
            price: 25000,
            img: twentyFive,
            discount: 0,
            name: 'Эдвин',
            age: 6,
            buy: 'Купить',
            like: like,
            isSell: false,
            isFavorite: false
        },
        {
            id: 5,
            price: 30000,
            img: thirtyOne,
            discount: 40,
            name: 'Сэм',
            age: 1,
            buy: 'Купить',
            like: like,
            isSell: false,
            isFavorite: false
        },
        {
            id: 6,
            price: 10000,
            img: ten,
            discount: 0,
            name: 'Маршалл',
            age: 8,
            buy: 'Продан',
            like: like,
            isSell: true,
            isFavorite: false
        }
]

);

export default CatBlock;