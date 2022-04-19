// Объект

// let obj = {
//     key: 'value',
//     num: 12,
//     v: null,
// }

// obj.key = 'value2'
// obj.key2 = 'newvalue'

// delete obj.key2

// console.log(obj)


// let user = {
//     name: 'Kushbak',
//     surname: 'Mamytov',
//     age: 99,
// }

// let product = {
//     size: 'xl',
//     price: 3000,
//     count: 2,
//     owner: {
//         name: 'Kushbak',
//         surname: 'Mamytov',
//         employee: {
            
//         }
//     },
//     owner2: user
// }

// let user2 = {
//     name: 'A'
// }

// let user3 = {
//     name: 'A'
// }

// console.log(user === user3)
// let name = {
//     size: 'xl'
// }
// let obj = {
//     name: name,
//     2: 'value'
// }

// console.log(obj.name)
// console.log(name)

// Массив

// let array = [
//     'value1', 
//     'value2', 
//     'value3',
// ]

// array[0] = 'not value'

// console.log(array.push('value4')) // Добавление в конец массива
// console.log(array.unshift('value0')) // Добавление в начало массива
// console.log(array.pop()) // Удаление одного элемента с конца
// console.log(array.shift()) // удаление одного элемента с начала

// console.log(array)


// 1- Создайте массив styles с элементами «Джаз» и «Блюз».
// 2- Добавьте «Рок-н-ролл» в конец.
// 3- Замените значение в середине на «Классика». 
// 4- Ваш код для поиска значения в середине должен работать 
// для массивов с любой длиной.
// 5- Удалите первый элемент массива и покажите его.
// 6- Вставьте «Рэп» и «Регги» в начало массива.

// array.length = 5; 5/2 = 2
// array[2]
// [0, 1, 2, 3, 4]

//  получение значения из массива посередине
// let styles = [1,2,3,4]

// let length = styles.length
// let middle = (length-1) / 2

// console.log(styles[middle])

let array = [0, 1, -2, 3 ,-4 ,-5]

array.forEach((item) => {
    if(item > 0) {
        console.log(item)
    }
})