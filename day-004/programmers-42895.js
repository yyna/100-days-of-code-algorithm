// 출처: https://programmers.co.kr/learn/courses/30/lessons/42895
// 동적계획법

// eslint-disable-next-line no-unused-vars
function solution(N, number) {
    const sets = []
    for (let i = 1; i < 9; i++) {
        sets[i] = new Set()
        sets[i].add(parseInt(`${N}`.repeat(i), 0))

        // i 개의 N으로 만들 수 있는 모든 수 찾아서 sets[i] set에 넣기
        for (let j = 1; j <= i / 2; j++) {
            sets[j].forEach((op1) => {
                sets[i - j].forEach((op2) => {
                    sets[i].add(op1 + op2)
                    sets[i].add(Math.abs(op1 - op2))
                    sets[i].add(op1 * op2)
                    if (op2 !== 0 && op1 % op2 === 0) sets[i].add(op1 / op2)
                    if (op1 !== 0 && op2 % op1 === 0) sets[i].add(op2 / op1)
                })
            })
        }

        // number 만들어졌나 확인
        if (sets[i].has(number)) return i
    }
    return -1
}
