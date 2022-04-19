// 1  Functions
// 2 Clojure
// 3 Loops
// Objects


// function pow() {
//     let count = 0
//     return function () {
//         console.log(count)
//     }
// }

// pow()()

// function pow(a, b) {
//     let res = a
//     for (let i = 1; i < b; i++) {
//         res = res*a
//     }
//     console.log(res)
// }
// function pow2(a, b) {
//     let i = 1
//     let res = a
//     while (i < b) {
//         res = 27
//         i++
//     }
//     console.log(res)
// }
// pow(3, 3)

// let client = {
//     username: 'aaaa_111',
//     name: 'Clientbek',
//     email: 'clientbek@gmail.com',
//     tel: '+996 555 555 333',
//     password: '123456',
// }

// let clients = [
//     {
//         username: 'aaaa_111',
//         name: 'Clientbek Asa',
//         email: 'clientbek@gmail.com',
//         tel: '+996 555 235 333',
//         password: '1234dfax56',
//     },
//     {
//         username: 'aaaa_111',
//         name: 'Zlientbek 90',
//         email: 'clientbek@gmail.com',
//         tel: '+996 777 555 333',
//         password: '1234bdfaetn56',
//     },
//     {
//         username: 'aaaa_111',
//         name: 'Clientbek 45',
//         email: 'clientbek@gmail.com',
//         tel: '+996 705 555 333',
//         password: '12sdafas3456',
//     },
//     {
//         username: 'aaaa_111',
//         name: 'Hl1ientbek 999',
//         email: 'clientbek@gmail.com',
//         tel: '+996 999 555 333',
//         password: '1234123156',
//     }
// ]

// let result = clients.filter((item) => {
//     return item.name.startsWith('Clientbek')
// })

// clients.sort((a, b) => {
//     if(a.email < b.email) return -1
//     return 1
// })

// console.log(clients)

// let firstLetter1 = 'slovo'.split()[0]
// let firstLetter2 = 'slovo'.slice(0, 1)

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
function getAlias(name) {
    let firstLetter = name.slice(0, 1)
    console.log(firstName[firstLetter] || 'Нету такоого')
}
getAlias('Zeineb')
