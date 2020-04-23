// 출처: https://programmers.co.kr/learn/courses/30/lessons/42578
// 해시

function solution(clothes) {
    let answer = 1;
    let closet = {}
    
    clothes.forEach(cloth => {
        closet[cloth[1]] = cloth[1] in closet ? closet[cloth[1]] + 1 : 1
    })
    
    Object.values(closet).forEach((v) => {
        answer *= (v + 1)
    })
    
    return answer - 1;
}