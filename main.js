const hamburgerEl = document.querySelector('.hamburger')
const closeEl = document.querySelector('.close')
const listEl = document.querySelector('nav')


hamburgerEl.addEventListener("click",  function() {
    listEl.classList.add('listItems');
})

closeEl.addEventListener("click",  function() {
    listEl.classList.remove('listItems');
})