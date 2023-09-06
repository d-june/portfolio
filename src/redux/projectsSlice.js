import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    reactProjects: [
        {
            id: 1,
            imageUrl: "/projects/vegeterian-food.JPG",
            title: "Vegetarian food",
            description: "Интернет магазин",
            tools:
              "React, Redux Toolkit, Typescript, React Router, react-loadable, react-paginate, backend - mockapi.io",
            applicationPage: "https://d-june.github.io/vegeterian-food/",
            githubPage: "https://github.com/d-june/vegeterian-food/",
          },
          {
            id: 2,
            imageUrl: "/projects/talk.JPG",
            title: "Talk",
            description: "Социальная сеть",
            tools:
              "React, Redux Toolkit, Typescript, React Router, Web sockets, Бэкенд на express.js, MongoDB Atlass",
            applicationPage: "https://talk-f8ry.onrender.com/",
            githubPage: "https://github.com/d-june/talk-frontend",
          },
    ],
    layoutProjects: [
        {
            id: 3,
            imageUrl: "/projects/in-chocolate.jpg",
            title: 'В шоколаде',
            description: 'Интернет магазин',
            tools: 'Конструктор тортов на JS. Прокрукта к блоку по кнопке. Добавлены попапы и VK отзывы.',
            applicationPage: 'https://d-june.github.io/sweet-life/',
            githubPage: 'https://github.com/d-june/sweet-life.git'
        },
        {
            id: 4,
            imageUrl: "/projects/creato.jpg",
            title: 'Creato',
            description: 'Лэндинг',
            tools: 'Использован слайдер Swiper (навигация + кастомные буллеты)',
            applicationPage: 'https://d-june.github.io/creato/',
            githubPage: 'https://github.com/d-june/creato.git'
        },
        {
            id: 5,
            imageUrl: "/projects/furniking.jpg",
            title: 'Furniking',
            description: 'Интернет магазин',
            tools: 'Добавление товаров в корзину. Фильтрация товаров. Споллеры при уменьшении экрана. Липкий блок с корзиной.',
            applicationPage: 'https://d-june.github.io/furniking/',
            githubPage: 'https://github.com/d-june/furniking.git'
        },
        {
            id: 6,
            imageUrl: "/projects/nfts.jpg",
            title: 'NFTs',
            description: 'Лэндинг',
            tools: 'Слайдер с увеличенным главным слайдом. Грид сетка swiper во втором слайдере. Споллеры при уменьшении экрана.',
            applicationPage: 'https://d-june.github.io/nfts/',
            githubPage: 'https://github.com/d-june/nfts.git'
        },
        {
            id: 7,
            imageUrl: "/projects/luis.jpg",
            title: 'Luis',
            description: 'Портфолио',
            tools: 'Опыт использования bootstrap. Переход к началу по кнопке в футере.',
            applicationPage: 'https://d-june.github.io/luis-oenrique/',
            githubPage: 'https://github.com/d-june/luis-oenrique'
        },
        {
            id: 8,
            imageUrl: "/projects/estate.jpg",
            title: 'Estate',
            description: 'Сайт недвижимости',
            tools: 'Липкий header. Переход к блоку при клике на кнопку. Споллеры при уменьшении экрана.',
            applicationPage: 'https://d-june.github.io/estate/',
            githubPage: 'https://github.com/d-june/estate.git'
        },
        {
            id: 9,
            imageUrl: "/projects/dudeshape.jpg",
            title: 'Dudeshape',
            description: 'Магазин косметики',
            tools: 'Swiper с эффектом параллакс. Анимация цифр в разделе "преимущества".',
            applicationPage: 'https://d-june.github.io/dudeshape/',
            githubPage: 'https://github.com/d-june/dudeshape.git'
        },
        {
            id: 10,
            imageUrl: "/projects/portfolio-creator.jpg",
            title: 'Portfolio creator',
            description: 'Портфолио',
            tools: 'Swiper, выходящий за пределы контейнера. Попапы. Споллеры при уменьшении экрана.',
            applicationPage: 'https://d-june.github.io/portfolio-creator/',
            githubPage: 'https://github.com/d-june/portfolio-creator.git'
        }
    ]
}

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
     
    },
})


export default projectsSlice.reducer;
