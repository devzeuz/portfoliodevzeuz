const hamburger = document.getElementById('hamburger')
const ul = document.getElementById('ul')

let menuOpen = false; 

hamburger.addEventListener('click', function(){
    menuOpen = !menuOpen

  ul.style.display = menuOpen ? 'flex': 'none';
})



