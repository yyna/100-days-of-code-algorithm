// 출처: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    return ((A.length + 1) * (A.length + 2) / 2) - A.reduce((num, sum) => sum + num, 0)
}