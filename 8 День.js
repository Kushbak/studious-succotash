var maximumWealth = function (accounts) {
    // console.log(accounts)
    let maxSum = 0
    for (let i = 0; i < accounts.length; i++) {
        let array = accounts[i]
        let sum = 0
        for(let j = 0; j < array; j++) {
            sum += array[j]
        }
        sum = Math.max(maxSum, sum)
    }
    return maxSum
};
let testArr = [[12, 32, 3], [1, 2, 3], [0, 55, 10]]
maximumWealth(testArr)