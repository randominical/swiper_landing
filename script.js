let pageSlider = new Swiper('.page', {
    //переназначение стандартных классов
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    //вертикальный слайдер
    direction: 'vertical',

    //количество слайдов для показа
    slidePerView: 'auto',

    //включаем параллакс
    parallax: true,
    
    //управление клавиатурой
    keyboard: {
        //включить/выключить
        enabled: true,
        //включить/выключить только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        //включить/выключить управление клавишами pageUp, pageDown
        pageUpDown: true,
    },
    
    //управление колесом мыши
    mousewheel: {
        //чувствительность колеса мыши
        sensitivity: 1,
        //класс объекта, на котором будет срабатывать прокрутка мышью
        //eventsTarget: '.image-slider'
    },
})