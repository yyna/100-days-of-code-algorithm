// 출처: https://programmers.co.kr/learn/courses/30/lessons/43237
// 이분탐색

/* eslint-disable no-loop-func */
// eslint-disable-next-line no-unused-vars
function solution(budgets, M) {
  let answer = 0
  let sum = 0
  let max = 0

  // 요청 예산의 총 합과 최대값을 구한다.
  budgets.forEach((budget) => {
    sum += budget
    if (max < budget) {
      max = budget
    }
  })

  // 요청 예산의 총 합이 전체 국가예산보다 작거나 같으면 모든 요청에 배정될 수 있으므로 최대값을 상한액으로 정한다.
  if (sum <= M) {
    answer = max
  }
  // 국가예산이 요청 예산보다 적을 경우
  else {
    answer = parseInt(M / budgets.length, 0) // 상한액
    let count = 0 // 상한액 이상의 예산을 요청한 지방의 수
    let sum2 = 0 // 현재 정해진 상한액으로 모든 지방에 예산을 배정할 경우의 총 예산

    // 예산을 더 배정할 수 있는 경우
    while (M - sum2 >= count) {
      sum2 = 0
      count = 0

      budgets.forEach((budget) => {
        if (budget <= answer) {
          sum2 += budget
        } else {
          sum2 += answer
          count += 1
        }
      })

      answer += parseInt((M - sum2) / count, 0)
    }
  }

  return answer
}
