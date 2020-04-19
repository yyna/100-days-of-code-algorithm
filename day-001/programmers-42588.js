// 출처: https://programmers.co.kr/learn/courses/30/lessons/42588
// 스택/큐

// 탑(Tower)의 높이(height)와 번호(index)를 가지는 Class
class Tower {
    constructor(height, index) {
        this.height = height
        this.index = index
    }
}

// findTowerToGetSignal - 신호를 받을 탑을 찾는 함수, 재귀함수로 쓰임
function findTowerToGetSignal(stack, tower) {
    // stack size 가 0 이면 수신할 탑이 없다는 뜻이므로 0을 반환한다.
    if (stack.length === 0) {
        stack.push(tower)
        return 0
    }
    // 후보 탑 탐색

    // 후보 1번 탑 = stack 꼭대기에 있는 탑
    const top = stack[stack.length - 1]

    // 후보 1번 탑의 높이가 신호를 보낼 탑의 높이보다 크면 신호를 받을 수 있으므로 해당 탑의 번호를 반환한다.
    // 현재 탑도 stack 에 넣어 다음 탐색에 후보로 쓰이도록 한다.
    if (top.height > tower.height) {
        stack.push(tower)
        return top.index
    }
    // 후보 탑이 발신 탑의 높이보다 낮을 경우 후보에서 제외하고 재귀함수를 통해 다음 후보를 찾는다.

    stack.pop()
    return findTowerToGetSignal(stack, tower)
}

// eslint-disable-next-line no-unused-vars
function solution(heights) {
    // stack 자료구조를 사용한다.
    // 신호를 받을 탑의 후보, stack의 꼭대기에 있는 탑이 후보 1번
    const stack = []
    return heights.map((height, index) => {
        return findTowerToGetSignal(stack, new Tower(height, index + 1))
    })
}
