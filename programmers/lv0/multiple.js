//n의 배수 고르기
//정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열 반환

function solution(n, numlist) {
    return numlist.filter(el => {return (el % n == 0)}) //filter() 메서드를 사용해 조건에 맞는 요소만 배열에 담아 반환
}