const toggle = document.querySelector('.toggle')
const menuBar = document.querySelector('.menu-bar')

toggle.addEventListener('click', () => {
  menuBar.classList.toggle('active')
})