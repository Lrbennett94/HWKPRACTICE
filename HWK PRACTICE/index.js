const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', ()=> {
    navUL.UL.classList.toggle('show');
});
