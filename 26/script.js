// BURGER MENU

const burgerBtn = document.querySelector('#burger-btn')
const burgerNav = document.querySelector('#burger-nav')

burgerBtn.addEventListener('click', () => {
  if(burgerNav.classList.contains('opened')) {
    burgerNav.classList.remove('opened')
  } else {
    burgerNav.classList.add('opened')
  }
})


// TYPING

const typingText = document.querySelector('#typing-text')

const text = 'ПРЕДСТАВЛЯЕМ ВАШЕМУ ВНИМАНИЮ IPHONE 22321'

let index = 0
const typeText = () => {
  typingText.innerHTML = text.slice(0, index)
  index++
  if(index > text.length) {
    index = 0
  }
}

setInterval(typeText, 200)


const openModalBtn = document.querySelector('#modal-btn')
const closeModalBtn = document.querySelector('#close-modal-btn')
const modal = document.querySelector('.modal-overview')

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
  console.log(modal.style)
})

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})


// TOASTER

const toasterBtn = document.querySelector('#toaster-btn')
const toasterContent = document.querySelector('.toaster-content')

let index2 = 0
toasterBtn.addEventListener('click', () => {
  const toasterMsg = document.createElement('div')
  toasterMsg.classList.add('toaster-msg')
  toasterMsg.innerHTML = 'Запрос успешно отправлен! ' + index2
  toasterContent.append(toasterMsg)
  // toasterContent.insertAdjacentElement('afterbegin', toasterMsg)
  
  index2++
  setTimeout(() => {
    toasterMsg.remove()
  }, 2000)
})



// IMAGE SLIDER

const slider = document.querySelector('.slider-imgs')
const imgs = document.querySelectorAll('.slider img')
const prev = document.querySelector('#slider-prev-btn')
const next = document.querySelector('#slider-next-btn')

let index3 = 1
slider.style.transform = `translateX(${-index3 * 200}px)`;

const slideImage = (direction = 1) => {
  if(direction === 1) {
    slider.style.transition = 'all 0.3s linear'
    index3++
  } else {
    slider.style.transition = 'all 0.3s linear'
    index3--
  }

  slider.style.transform = `translateX(${-index3 * 200}px)`;
}

prev.addEventListener('click', () => {
  slideImage(0)
})

next.addEventListener('click', () => {
  slideImage(1)
})

slider.addEventListener('transitionend', () => {
  if(index3 > imgs.length - 2) {
    slider.style.transition = 'none'
    index3 = 1
    slider.style.transform = `translateX(${-index3 * 200}px)`;
} else if(index3 < 1) {
    slider.style.transition = 'none'
    index3 = imgs.length-2
    slider.style.transform = `translateX(${-index3 * 200}px)`;
  }
})



// setInterval(slideImage, 2000)

// const slider = document.querySelector('.slider-imgs')
// const imgs = document.querySelectorAll('.slider img')
// const prev = document.querySelector('#slider-prev-btn')
// const next = document.querySelector('#slider-next-btn')

// let index3 = 1
// slider.style.transform = `translateX(${-index3 * 200}px)`;
// const slideImage = (direction = 1) => {
//   if(direction === 1) {
//     index3++
//     slider.style.transition = `all 0.3s linear`;
//   } else {
//     index3--
//     slider.style.transition = `all 0.3s linear`;
//   }


//   slider.style.transform = `translateX(${-index3 * 200}px)`;
// }


// prev.addEventListener('click', () => {
//   slideImage(0)
// })

// next.addEventListener('click', () => {
//   slideImage(1)
// })

// slider.addEventListener('transitionend', () => {
//   if(index3 === imgs.length - 2) {
//     slider.style.transition = `none`;
//     index3 = 0
//     slider.style.transform = `translateX(${-index3 * 200}px)`;
//   } else if(index3 === 0) {
//     slider.style.transition = `none`;
//     index3 = imgs.length-1
//     slider.style.transform = `translateX(${-index3 * 200}px)`;
//   }
// })

// CART

const goodsArr = [
  {
    id:1,
    name: 'Парты',
  },
  {
    id:2,
    name: 'Стулья',
  },
  {
    id:3,
    name: 'Ноутбук',
  },
  {
    id:4,
    name: 'Окна',
  }
]

const goods = document.querySelector('#goods')
const cart = document.querySelector('#cart')

goodsArr.forEach(item => {
  const goodLayout = `
    <div class='good-item'>
      <p>${item.name}</p>
      <button id='add-cart-btn' data-good='${item.id}'>Добавить в корзину</button>
    </div>
  `
  goods.innerHTML += goodLayout
})

const addCartBtns = document.querySelectorAll('#add-cart-btn')
const clearCartBtn = document.querySelector('#cart-clean-btn')

let cartArr = [{
  id: 1,
  name: 'Парта', 
  cartItemIndex: 12,
  count: 5
}]

let cartItemIndex = 0
const renderCart = () => {
  const cartsLayout = cartArr.map((item, index) => {
    return `
      <div class='cart-item' data-cartItemId='${item.id}'>
        <button class='decrement-cart-item-btn'>-</button>
        <p>${item.name} ${item.count}x</p>
        <button class='delete-cart-btn' data-cart='${item.cartItemIndex}'>Удалить</button>
      </div>
    `
  })
  cart.innerHTML = cartsLayout.join('')

  const deleteCartItemBtns = document.querySelectorAll('.delete-cart-btn')

  deleteCartItemBtns.forEach(item => {
    item.addEventListener('click', () => {
      let cartItemId = item.getAttribute('data-cart')
      cartArr = cartArr.filter(cartItem => {
        return Number(cartItem.cartItemIndex) !== Number(cartItemId)
      })
      renderCart()
    })
  })

  const decrementCartItemBtns = document.querySelectorAll('.decrement-cart-item-btn')
  decrementCartItemBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      let cartItemId = event.target.parentElement.getAttribute('data-cartItemId')
      let cartGoodIndex = cartArr.findIndex(g => +g.id === +cartItemId)
      if(cartArr[cartGoodIndex].count > 0) {
        cartArr[cartGoodIndex].count--
      }
      renderCart()
    })
  })
}


addCartBtns.forEach(item => {
  item.addEventListener('click', () => {
    cartItemIndex++
    let goodId = item.getAttribute('data-good')
    let selectedGood = goodsArr.find(g => +g.id === +goodId)
    let cartGoodIndex = cartArr.findIndex(g => +g.id === +goodId) 
    if(cartGoodIndex === -1) {
      cartArr.push({ ...selectedGood, cartItemIndex: cartItemIndex, count: 1 })
    } else {
      cartArr[cartGoodIndex].count++
    }
    
    renderCart()
  })
})

clearCartBtn.addEventListener('click', () => {
  cartArr = [
    { name: 'Парты'},
    { name: 'Стулья'},
    { name: 'Ноутбуки'},
  ]
  renderCart()
})



// Сделать кнопку "Удалить все"
// cartArr