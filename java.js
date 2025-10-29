const nav=document.querySelector('.menu__list');
const menus=document.querySelector('#toggle__menu');

menus.addEventListener('click',()=>
{
   nav.classList.toggle('active');
   menus.classList.toggle('bx-x')
})
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const changeHeaderColorOnScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 50; 
         if (scrollPosition > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', changeHeaderColorOnScroll);
    changeHeaderColorOnScroll();
});