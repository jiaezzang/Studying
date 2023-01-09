//A로 B만들기
// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 

function solution(before, after) {
    return ([...before].sort().join('') == [...after].sort().join('')) ? 1 : 0  //요소를 동일하게 가지고 있는지 확인
}