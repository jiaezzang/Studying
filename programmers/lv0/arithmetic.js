// num1에서 num2를 더한 수 구하기
function solution(num1, num2) {
    var answer = num1 + num2;
    return answer;
}
// 화살표 함수로 간단하게 표현
// const solution = (num1, num2) => num1 + num2

// num1에서 num2를 뺀 수 구하기
function solution2(num1, num2) {
    var answer = 0;
    if(-50000<=num1<=50000 && -50000<=num2<=50000){
        answer = num1 - num2;
    }
    return answer;
}
// 화살표 함수로 간단하게 표현
// const solution2 = (num1, num2) => num1 - num2


// num1과 num2를 곱한 수 구하기
function solution3(num1, num2) {
    0<=num1<=100;
    0<=num2<=100;
    return num1 * num2;
}
// 화살표 함수로 간단하게 표현
// const solution3 = (num1, num2) => num1 * num2


// num1로 num2를 나눈 값의 나머지 구하기
function solution4(num1, num2) {
    return num1%num2;
}
// 화살표 함수로 간단하게 표현
// const solution4 = (num1, num2) => num1 % num2

