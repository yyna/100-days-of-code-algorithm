// 출처: https://programmers.co.kr/learn/courses/30/lessons/42840
// 완전탐색

// eslint-disable-next-line no-unused-vars
function solution(answers) {
    const random = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ]
    const count = [0, 0, 0]

    // 완전탐색
    answers.forEach((answer, i) => {
        if (answer === random[0][i % random[0].length]) count[0]++
        if (answer === random[1][i % random[1].length]) count[1]++
        if (answer === random[2][i % random[2].length]) count[2]++
    })

    // 최대 점수와 그 점수를 받은 학생들 찾기
    let max = 0
    let students = []
    count.forEach((c, index) => {
        if (c > max) {
            students = [index + 1]
            max = c
        } else if (c === max) {
            students.push(index + 1)
        }
    })

    return students
}
