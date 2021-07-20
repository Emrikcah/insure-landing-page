const hamburger = document.querySelector('.hamburger-menu');
const ul = document.getElementById('header__links');


hamburger.addEventListener('click', ()=>{
   ul.classList.toggle('show__header__links');
   hamburger.classList.toggle('active');
});