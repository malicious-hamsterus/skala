document.addEventListener('DOMContentLoaded', () => {
    const top = document.querySelector('body');
    const topBtn = document.querySelector('.topBtn');
    topBtn.addEventListener('click', () => {
        top.scrollIntoView({behavior: "smooth"});
    })
    window.addEventListener('scroll', function() {
        if(pageYOffset > 100) {
            topBtn.classList.add('visible')
        } else topBtn.classList.remove('visible')
      });


})