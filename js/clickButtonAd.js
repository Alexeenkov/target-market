const adButtons = document.getElementsByClassName('ad__button');
const inputAddress = document.getElementById('input-address');
const helpInput = document.getElementById('source');
const addressSign = document.getElementById('address-sign');

for (let button of adButtons) {
    button.addEventListener('click', () => {
        if (button.textContent === 'Рекламировать соцсеть') {
            inputAddress.setAttribute('placeholder', 'Введите адрес соц. сети');
            helpInput.value = 'Ссылка на аккаунт соц. сети:';
            addressSign.textContent = 'Например, https://instagram.com/ivan';
        } else if (button.textContent === 'Рекламировать интернет-магазин') {
            inputAddress.setAttribute('placeholder', 'Введите адрес интернет-магазина');
            helpInput.value = 'Ссылка на интернет-магазин:';
            addressSign.textContent = 'Например, https://ozon.ru';
        } else if (button.textContent === 'Рекламировать сайт') {
            inputAddress.setAttribute('placeholder', 'Введите адрес сайта');
            helpInput.value = 'Ссылка на сайт:';
            addressSign.textContent = 'Например, https://yandex.ru';
        }
    });
}