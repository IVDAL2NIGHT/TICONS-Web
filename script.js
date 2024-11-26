//==================== JS SECTION STARTS ====================
//==================== JS SECTION STARTS ====================
//==================== JS SECTION STARTS ====================
//==================== JS SECTION STARTS ====================



let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.search-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    contactInfo.classList.remove('active');
}

document.addEventListener('click', (event) => {
    if (!searchForm.contains(event.target) && !event.target.closest('#search-btn')) {
        searchForm.classList.remove('active');
    }
});

document.querySelector('#info-btn').onclick = () => {
    contactInfo.classList.toggle('active');
}

document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});




