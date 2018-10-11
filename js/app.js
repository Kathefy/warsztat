document.addEventListener('DOMContentLoaded', function() {

    var slides = document.querySelectorAll(".slide");

    for (var i = 0; i < slides.length; i++) {
        slides[i].addEventListener('mouseover', function () {
            this.firstElementChild.style.display = "none"
        });
        slides[i].addEventListener('mouseout', function () {
            this.firstElementChild.style.display = "block"
        });
    }

    var banners = document.querySelectorAll('.banner-slide');
    var btnPrev = document.querySelector('.banner-prev');
    var btnNext = document.querySelector('.banner-next');
    var currentSlide = 0;

    btnPrev.addEventListener("click", function() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = banners.length-1;
        }
        for (var i=0; i<banners.length; i++) {
            banners[i].classList.remove('banner-slide-active');
        }
        banners[currentSlide].classList.add('banner-slide-active');
    });
    btnNext.addEventListener("click", function() {
        currentSlide++;
        if (currentSlide > banners.length-1) {
            currentSlide = 0;
        }
        for (var i=0; i<banners.length; i++) {
            banners[i].classList.remove('banner-slide-active');
        }
        banners[currentSlide].classList.add('banner-slide-active');
    })


});