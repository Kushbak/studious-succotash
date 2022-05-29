// DOM - Document Object Model

// const mainTitle = document.querySelector('.home-title')
// // const mainTitle = document.getElementsByTagName('h1')

// mainTitle.addEventListener('click', (event) => {
//   console.log(event)
//   mainTitle.style.fontSize = '10px'
// })


const burgerBtn = document.querySelector('#burger-menu-icon')
const nav = document.querySelector('.nav')

burgerBtn.addEventListener('click', () => {
  if(nav.classList.contains('opened')) {
    nav.classList.remove('opened')
  } else {
    nav.classList.add('opened')
  }
})

// burgerBtn.addEventListener('click', () => {
//   if(nav.style.display === 'none') {
//     nav.style.display = 'flex'
//     nav.style.height = '100%'
//     nav.style.visibility = 'visible'
//   } else {
//     nav.style.display = 'none'
//   }
// })