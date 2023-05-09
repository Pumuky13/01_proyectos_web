const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');


let pictures = ['../img/design/Dias%20y%20Flores%20(1).jpg',
    '../img/design/Dias%20y%20Flores%20(3).jpg',
    '../img/design/Dias%20y%20Flores%20(7).jpg',
    '../img/design/Dias%20y%20Flores%20(13).jpg',
    '../img/design/Dias%20y%20Flores%20(14).jpg']

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

