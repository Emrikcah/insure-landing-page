const hamburger = document.querySelector('.hamburger-menu');
const headerLinks = document.getElementById('header__links');

hamburger.addEventListener('click', ()=>{
   headerLinks.classList.toggle('show');

});