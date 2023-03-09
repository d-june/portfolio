import { createSlice } from '@reduxjs/toolkit'
import inChocolateImg from '../img/projects/in-chocolate.jpg'
import creatoImg from '../img/projects/creato.jpg'
import furnikingImg from '../img/projects/furniking.jpg'
import nftsImg from '../img/projects/nfts.jpg'
import luisImg from '../img/projects/luis.jpg'
import estateImg from '../img/projects/estate.jpg'
import dudeshapeImg from '../img/projects/dudeshape.jpg'
import portfolioCreatorImg from '../img/projects/portfolio-creator.jpg'
import friendsImg from '../img/projects/friends.JPG'


const initialState = {
    reactProjects: [
        {
            id: 9,
            image: friendsImg,
            title: 'Friends',
            description: 'Социальная сеть (React, Typescript, Redux Toolkit, React Router, WebSocket)',
            ghPages: 'https://d-june.github.io/friends/',
            github: 'https://github.com/d-june/friends'
        },
        {
            id: 10,
            image: friendsImg,
            title: 'Somesthing else',
            description: 'Еще предстоит добавить',
            ghPages: '',
            github: ''
        },
        {
            id: 10,
            image: friendsImg,
            title: 'Somesthing else',
            description: 'Еще предстоит добавить',
            ghPages: '',
            github: ''
        },
        {
            id: 10,
            image: friendsImg,
            title: 'Somesthing else',
            description: 'Еще предстоит добавить',
            ghPages: '',
            github: ''
        },
    ],
    layoutProjects: [
        {
            id: 1,
            image: inChocolateImg,
            title: 'В шоколаде',
            description: 'Конструктор тортов на JS. Прокрукта к блоку по кнопке. Добавлены попапы и VK отзывы.',
            ghPages: 'https://d-june.github.io/sweet-life/',
            github: 'https://github.com/d-june/sweet-life.git'
        },
        {
            id: 2,
            image: creatoImg,
            title: 'Creato',
            description: 'Использован слайдер Swiper (навигация + кастомные буллеты)',
            ghPages: 'https://d-june.github.io/creato/',
            github: 'https://github.com/d-june/creato.git'
        },
        {
            id: 3,
            image: furnikingImg,
            title: 'Furniking',
            description: 'Добавление товаров в корзину. Фильтрация товаров. Споллеры при уменьшении экрана. Липкий блок с корзиной.',
            ghPages: 'https://d-june.github.io/furniking/',
            github: 'https://github.com/d-june/furniking.git'
        },
        {
            id: 4,
            image: nftsImg,
            title: 'NFTs',
            description: 'Слайдер с увеличенным главным слайдом. Грид сетка swiper во втором слайдере. Споллеры при уменьшении экрана.',
            ghPages: 'https://d-june.github.io/nfts/',
            github: 'https://github.com/d-june/nfts.git'
        },
        {
            id: 5,
            image: luisImg,
            title: 'Luis',
            description: 'Опыт использования bootstrap. Переход к началу по кнопке в футере.',
            ghPages: 'https://d-june.github.io/luis-oenrique/',
            github: 'https://github.com/d-june/luis-oenrique'
        },
        {
            id: 6,
            image: estateImg,
            title: 'Estate',
            description: 'Липкий header. Переход к блоку при клике на кнопку. Споллеры при уменьшении экрана.',
            ghPages: 'https://d-june.github.io/estate/',
            github: 'https://github.com/d-june/estate.git'
        },
        {
            id: 7,
            image: dudeshapeImg,
            title: 'Dudeshape',
            description: 'Swiper с эффектом параллакс. Анимация цифр в разделе "преимущества".',
            ghPages: 'https://d-june.github.io/dudeshape/',
            github: 'https://github.com/d-june/dudeshape.git'
        },
        {
            id: 8,
            image: portfolioCreatorImg,
            title: 'Portfolio creator',
            description: 'Swiper, выходящий за пределы контейнера. Попапы. Споллеры при уменьшении экрана.',
            ghPages: 'https://d-june.github.io/portfolio-creator/',
            github: 'https://github.com/d-june/portfolio-creator.git'
        }
    ]
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        some(state, action) {

        }
    },
})






export default projectsSlice.reducer;
