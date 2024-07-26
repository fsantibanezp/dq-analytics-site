document.addEventListener('scroll', function() {
    const banners = document.querySelectorAll('.full-section');
    banners.forEach(function(banner) {
        const speed = 0.5;
        const offset = window.pageYOffset;
        banner.style.backgroundPositionY = offset * speed + 'px';
    });
});
