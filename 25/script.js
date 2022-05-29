// const h1 = document.querySelectorAll('h1') // Чтобы найти все элементы
// const h1 = document.querySelector('h1') // чтобы найти первый элемент

// h1.innerText = '<p>Hello World</p>'
// h1.style.backgroundColor = 'rgba(200, 200, 200)'

// let isHelloWorld = false
// h1.addEventListener('click', () => {
//   setTimeout(() => {
//     if(!isHelloWorld) {
//       h1.innerHTML = 'Hello World'
//       h1.style.transition = 'all 2s ease'
//       h1.style.color = 'rebeccapurple'
//       h1.style.backgroundColor = 'yellow'
//     } else {
//       h1.innerHTML = 'JAVASCRIPT'
//       h1.style.transition = 'all 2s ease'
//       h1.style.color = 'yellow'
//       h1.style.backgroundColor = 'rebeccapurple'
//     }
  
//     isHelloWorld = !isHelloWorld
//   }, 2000)
// })


// const start = document.querySelector('#start')
const value = document.querySelector('#value')
// const pause = document.querySelector('#pause')

// let counter = 0
// let isPaused = true
// const startTimer = () => {
//   if(isPaused) {
//     counter++
//     value.innerHTML = counter
//   }
// }
// setInterval(() => {
//   startTimer()
// }, 1000)

// start.addEventListener('click', () => {
//   isPaused = false
// })

// pause.addEventListener('click', () => {
//   isPaused = true
// })


// let list = [1,2,3,4,5,6]

// list.forEach(num => {
//   let p = document.createElement('p')
//   p.innerHTML = num
//   value.append(p)
// })