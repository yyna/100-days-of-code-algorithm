// 출처: https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
    // Write your code here
    let count = {}
    a.forEach((n) => {
        if (n in count) {
            count[n]++
        } else {
            count[n] = 1
        }
    })

    let keys = Object.keys(count)
    let max = count[keys[0]]
    for (let i = 1; i < keys.length; i++) {
        if (count[keys[i]] > max) {
            max = count[keys[i]]
        }
        if (keys[i]-1 === parseInt(keys[i-1]) && max < count[keys[i]] + count[keys[i-1]]) {
            max = count[keys[i]] + count[keys[i-1]]
        }
    }
    return max
}