window.addEventListener('scroll', function () {
    const scrollButton = document.getElementById('scrollButton');
    if (window.scrollY > 100) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});