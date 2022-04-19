


// let usersKeys = Object.keys(user) // [ 'name', 'age', 'sss' ]
// for(let i = 0; i< usersKeys.length; i++) {
//     const key = usersKeys[i]
//     user[]

// }


// let obj = {
//     2: 2,
//    age: 2,
//     1: 1,
// }
// let key = 'age'

// obj['age']
// obj[key]

// var singleNumber = function(nums) {
//     const map = {}
//     nums.forEach((item) => {
//         if(!map[item]) {
//             map[item] = 0
//         }
//         map[item]++
//     })
//     for(let item in map) {
//         if(map[item] === 1) return item
//     }
// };

// console.log(singleNumber(testArr))

// console.log(Number.MAX_VALUE)


const user = {
    name: 'asd',
    age: 100,
    sss1: 'sss',
    someKey: 'someValue',
    obj2: {
        someInnerKey: 100
    }
}   

const a = {}


function someFunc() {
    let name = 'asd2'
    let { someInnerKey } = user.obj2 // Деструктуризация
    let { name: nameOfUser } = user

    // console.log(name) === console.log(user.name)
    const arr = [0, 2, 3 ,4 ,4]
    let [first, second, ...restArr] = arr
    console.log(first, second, restArr)
    // console.log(someInnerKey)
    // console.log(first, second, c)
}

someFunc()