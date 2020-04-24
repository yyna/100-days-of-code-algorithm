// 출처: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const pair = {}
    A.forEach((number) => {
        if (number in pair) delete pair[number]
        else pair[number] = 0
    })
    return parseInt(Object.keys(pair)[0])
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))