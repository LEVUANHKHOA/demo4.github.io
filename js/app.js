/*------Swiper start------*/
var swiper = new Swiper('.swiper-container-2', {
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

/*------Swiper end------*/

function toggleMenu() {
  let menu = document.querySelector("#navbar-mobile");
  menu.classList.toggle("d-none");
}