const sliderContainer = document.querySelector('.slider_container');
const leftSlide = document.querySelector('.left_slide');
const rightSlide = document.querySelector('.right_slide');
const upButton = document.querySelector('.up_button');
const downButton = document.querySelector('.down_button');
const slidesLength = rightSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener('click',() => changeSlide('up'));
downButton.addEventListener('click',() => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;
    if(direction == 'up'){
        activeSlideIndex++;
        if(activeSlideIndex >= slidesLength){
            activeSlideIndex = 0;
        }
    }
    if(direction == 'down'){
        if(activeSlideIndex > 0){
            activeSlideIndex--;
        }else{
            activeSlideIndex = slidesLength-1;
        }
    }
    rightSlide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    leftSlide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}