window.onload = function(event) {
    const nav = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 100) {
            nav.classList.add('scroll');
        }
        else{
            nav.classList.remove('scroll');
        }
    });
}
