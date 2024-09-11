let offset = 0; 
let sliderCount = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 1291;
    if (offset > 1291){
        offset = 0;
    }
    sliderLine.style.left =  -offset + 'px';
})

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 1291;
    if (offset < 0){
        offset = 1291;
    }
    sliderLine.style.left =  -offset + 'px';
})

document.querySelector('.slider-line').addEventListener

