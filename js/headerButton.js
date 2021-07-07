let headerButton = document.getElementById('header-button');

changeButtonLink();

window.addEventListener('resize', () => {
    changeButtonLink();
});

function getWindowWidth() {
    return window.innerWidth || document.body.clientWidth;
}

function changeButtonLink() {
    if (getWindowWidth() <= 700) {
        headerButton.setAttribute('href', '#popup');
        headerButton.classList.add('popup-link');
        popupLinks = document.querySelectorAll('.popup-link');
    } else {
        headerButton.setAttribute('href', 'launch-ad.html');
        headerButton.classList.remove('popup-link');
    }
}