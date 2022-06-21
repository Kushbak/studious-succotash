const prev = document.querySelector('#prev')
const result = document.querySelector('.input')
const nums = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.operators')
const clear = document.querySelector('#clear')
const equal = document.querySelector('#equal')
const cleanLastNum = document.querySelector('#cleanLastNum')

let theNum = ''
let oldNum = ''
let resultNum = ''
let operator

nums.forEach(num => {
  num.addEventListener('click', (e) => {
    if(resultNum) {
      theNum = e.target.innerHTML
      resultNum = ''
    } else {
      theNum = theNum + e.target.innerHTML
    }
    result.value = theNum
  })
})

operators.forEach(op => {
  op.addEventListener('click', (e) => {
    oldNum = theNum
    theNum = ''
    operator = e.target.getAttribute('id')
    prev.innerHTML = oldNum + e.target.innerHTML
  })
})

clear.addEventListener('click', () => {
  theNum = ''
  oldNum = ''
  resultNum = ''
  prev.innerHTML = ''
  result.value = 0
})

equal.addEventListener('click', () => {
  theNum = parseFloat(theNum)
  oldNum = parseFloat(oldNum)

  switch(operator) {
    case 'multiple':
      resultNum = oldNum * theNum
      break
    case 'divide':
      resultNum = oldNum / theNum
      break
    case 'plus':
      resultNum = oldNum + theNum
      break
    case 'minus':
      resultNum = oldNum - theNum
      break
    default:
      resultNum = theNum
  }

  result.value = resultNum
  prev.innerHTML = ''

  oldNum = 0
  theNum = String(resultNum)
})

cleanLastNum.addEventListener('click', () => {
  theNum = theNum.slice(0, theNum.length - 1)
  result.value = theNum
})