// 출처: https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const answer = []
    A.forEach((number, index) => {
        answer[(index + K) % A.length] = number
    })
    return answer
}