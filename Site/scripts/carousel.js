/* Carousel */
const imagesCarousel = document.querySelectorAll('.carousel img');
let index = 0;

function carouselAuto()
{
    if(index < imagesCarousel.length - 1)
    {
        imagesCarousel[index].classList.remove('imageAffiche');
        imagesCarousel[index].classList.add('imageMasque');
        index++
        imagesCarousel[index].classList.remove('imageMasque');
        imagesCarousel[index].classList.add('imageAffiche');
    }
    else if (index === imagesCarousel.length -1)
    {
        imagesCarousel[index].classList.remove('imageAffiche');
        imagesCarousel[index].classList.add('imageMasque');
        index = 0;
        imagesCarousel[index].classList.remove('imageMasque');
        imagesCarousel[index].classList.add('imageAffiche');
    }
}

setInterval(carouselAuto, 3000);
