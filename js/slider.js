window.addEventListener("optimizedResize", () => {
    if (window.screen.width = 700) {
        console.log('Опачки, работает кажется');
    }
});
// Инициализируем Swiper
if (screen.width <= 700) {
    new Swiper('.slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

}