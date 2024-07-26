document.addEventListener('scroll', function() {
    const banners = document.querySelectorAll('.full-section');
    banners.forEach(function(banner) {
        const speed = 0.5;
        const offset = window.pageYOffset;
        banner.style.backgroundPositionY = offset * speed + 'px';
    });
});


function scrollContentLeft() {
    const container = document.querySelector('.use-cases-container');
    container.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth'
    });
}

function scrollContentRight() {
    const container = document.querySelector('.use-cases-container');
    container.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
    });
}
