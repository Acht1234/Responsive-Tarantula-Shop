let nav = document.querySelector('.nav');

document.querySelector('#menu-btn').onclick = () =>{
    nav.classList.toggle('active');
    cartitem.classList.remove('active');
    search.classList.remove('active');
}

let cartitem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartitem.classList.toggle('active');
    nav.classList.remove('active');
    search.classList.remove('active');
}

let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    search.classList.toggle('active');
    nav.classList.remove('active');
    cartitem.classList.remove('active');
}

window.onscroll = () =>{
    nav.classList.remove('active');
    cartitem.classList.remove('active');
    search.classList.remove('active');
}