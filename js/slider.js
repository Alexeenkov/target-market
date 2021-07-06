// Инициализируем Swiper
new Swiper('.slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // Отступ между слайдами
    spaceBetween: 20,
    autoHeight: true,
    keyboard: {
        enabled: true,
    },
    odserver: true,
    observeParents: true,
    observeSlideChildren: true,
});