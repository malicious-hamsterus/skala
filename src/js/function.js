//подчеркивание активного пункта меню
document.addEventListener('DOMContentLoaded', () => {
    const page = document.querySelector('#pageid').dataset.pagename;
    const menuCollection = document.querySelectorAll('.main-menu a');
    if(page) {
        for(let link of menuCollection) {
            if (link.dataset.page === page) {
                link.classList.add('activeLink');
            }
        }
    }

    
    // document.querySelector('a[href="#contacts"]').addEventListener('click', (event) => {
    //     event.preventDefault();
    //     document.querySelector('#contacts').scrollIntoView({behavior: "smooth"});
    // })

const menuTrigger = document.querySelector('.menu-btn');
menuTrigger.addEventListener('click', (event) => {
    event.stopPropagation();
    document.querySelector('.passMenuList').classList.remove('hide')
    event.target.parentElement.classList.toggle('active')
})
document.addEventListener('click', (event) => {
    document.querySelector('.passMenuList').classList.add('hide')
    setTimeout(() => {
        document.querySelector('.collapse-menu.active').classList.remove('active')
    }, 500);
})

})

