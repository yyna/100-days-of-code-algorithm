// 출처: https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let a = 0
    let b = A.reduce((num, sum) => sum + num, 0)
    let min = Number.MAX_VALUE
    
    for (let i = 0; i < A.length - 1; i++) {
        a += A[i]
        b -= A[i]
        if (min > Math.abs(a - b)) {
            min = Math.abs(a - b)
        }
    }

    return min
}