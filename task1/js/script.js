window.addEventListener('DOMContentLoaded', () => {

    const headerLinks = document.querySelectorAll('.header__link[data-goto]');
    const burgerMenu = document.querySelector('.btn-menu');
    const burgerBody = document.querySelector('.header__nav');

    if (headerLinks.length > 0) {
        headerLinks.forEach(headerLink => {
            headerLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const headerLink = e.target;
            if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
                const gotoBlock = document.querySelector(headerLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

                if (burgerMenu.classList.contains('_active')) {
                    burgerMenu.classList.remove('_active');
                    burgerBody.classList.remove('_active');
                }

                window.scrollTo({
                    top: gotoBlockValue - 70,
                    behavior: 'smooth'
                });
                e.preventDefault();
            }
        }
    }

    if (burgerMenu) {
        burgerMenu.addEventListener("click", function (e) {
            burgerMenu.classList.toggle('_active');
            burgerBody.classList.toggle('_active');
        })
    }

})