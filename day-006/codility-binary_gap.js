// 출처: https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

function solution(N) {
    let answer = 0
    let lastOneIndex = 0
    let index = 0

    while (N != 0) {
        index++
        if (N%2) {
            if (lastOneIndex > 0 && index - lastOneIndex > answer) {
                answer = index - lastOneIndex - 1
            }
            lastOneIndex = index
        }
        N = parseInt(N/2)
    }

    return answer
}