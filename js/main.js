const burgerButton = document.querySelector('.burger');
const mobileMenuholder = document.querySelector('.mobile_menu_holder');
const closeButton = document.querySelector('.close_button');

burgerButton.addEventListener('click', function(){
    mobileMenuholder.classList.add('is-opened');
    closeButton.classList.add('is-done');
});
closeButton.addEventListener('click', function(){
    mobileMenuholder.classList.remove('is-opened');
    closeButton.classList.remove('is-done');
});

