// function someFunction () {
//     const username = 'Some Name'
//     function someSecondFunction() {
//         console.log(username)
//         let username2 = 'some name2'
//     }
//     console.log(username2)
// }

// function SomeThirdFunction() {
//     const username = 'Some Name'
//     function someSecondFunction() {
//         console.log(username)
//     }
//     console.log(username2)
// }

// someSecondFunction()
// someFunction()
// console.log(someUsername)

// let username = 'some name'
// function someFunc() {
//     function someFunc3(){
//         let username = 'some name 3' 
//         console.log(username)
//     }
//     let username = 'some name 2'
//     console.log(username)
//     someFunc3()
// }
// someFunc()

// let obj = {
//     self: this,
//     objTitle: 'Some title',
//     user: {
//         name: 'some name',
//         username: 'ssossosso',
//         walk: () => {
//             console.log(obj.self)
//         },
//         sayName: function() {
//             console.log(this)
//         }
//     }
// }

// obj.user.walk()
// obj.user.sayName()

// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     sayName() {
//         console.log(this.name)
//     }

//     sayAge() {
//         console.log(this.age)
//     }
// }

// const kushbak = new User('Kushbak', 20)
// const taalay = new User('Taalay', 24)

// kushbak.sayName()
// taalay.sayName()


[].filter(() => {
    return false
})

// function someFunc(a) {
    
// }
// function callback() {
//     console.log('Функция вызвана')
// }
// someFunc(callback)

// const languages = ["Java", "TypeScript", "C#", "JavaScript", "Julia"]

// const jLanguages = languages.filter(function (language) {
//   return language.toUpperCase().startsWith("j")
// })

// console.log(jLanguages)

// let sum = 0
// let nums = [123, 121, 111, 75,12,768,34]

// nums.forEach((item) => {
//     sum = sum + item
// })
// console.log(sum)

// let sum2 = nums.reduce((sum, item) => {
//     return sum + item
// }, 0)

// let abc = ['C', 'A', 'A', 'c', 'Z', 'G', 'B', 'Я', 'Л']
// let total = abc.reduce((total, item) => {
//     return total + item
// }, '')


// let result = users.find((item) => {
//     return item.age === 70
// })

// console.log(abc.join(' '))
// console.log(abc.includes('z')) 

// let nums = [5,3,75, 12, 1, 2]
// nums.sort((a, b) => {
//   if (a > b) return 1; // если первое значение больше второго
//   if (a == b) return 0; // если равны
//   if (a < b) return -1; // если первое значение меньше второго
// })
// console.log(nums)

// nums.sort((a, b) => {
//     return b - a // по убыванию
//     return a - b // по возрастанию
// })

let users = [
    {
        name: 'some name 4',
        age: 70,
    },
    {
        name: 'some name 3',
        age: 30,
    },
    {
        name: 'some name',
        age: 20,
    },
    {
        name: 'some name 2',
        age: 25,
    },
]

// users.sort((a, b) => {
//     return b.name - a.name
// })

// console.log(users)

users.forEach(item => {
    return item
})

console.log(result)