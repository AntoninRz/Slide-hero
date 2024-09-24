const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation')

function showBurger() {
    burger.style.display = "flex";
    navigation.style.display = 'none';
}
function closeBurger() {
    navigation.style.display = 'flex';
    burger.style.display = "none";
}


let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let nextButton = document.getElementById('next');
let seeMoreButton = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel')
let listHtml = document.querySelector('.carousel .list')

nextButton.onclick = function() {
    showSlider('next')
}
prevButton.onclick = function() {
    showSlider('prev');
}

let unAcceptClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('prev', 'next')
    let items = document.querySelectorAll('.carousel .list .item')
    if (type === 'next') {
        listHtml.appendChild(items[0]);
        carousel.classList.add('next');
    }else {
        let positionLast = items.length -1;
        listHtml.prepend(items[positionLast]);
        carousel.classList.add('prev')
    }
    clearTimeout(unAcceptClick)
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}

seeMoreButton.forEach(button => {
    button.onclick = function() {
        carousel.classList.add('showDetail');
    }
})
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}