// num1로 num2를 나눈 몫 구하기
function solution(num1, num2) {
    return parseInt(num1/num2); //parseInt는 문자열 인자를 파싱해서 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환한다.
}

function solution2(num1, num2) {
    return Math.floor(num1/num2); // Math.floor는 소숫점 이하의 자리를 제거한다. 만약, 음수의 경우 -1을 추가로 해준다.
}

function solution3(num1, num2) {
    return Math.trunc(num1/num2); // Math.trunc는 정수 부분만을 반환한다. 
}

//화살표 함수로 간단하게 표현
//const solution = (num1, num2) => parseInt(num1/num2)
//const solution = (num1, num2) => Math.floor(num1/num2)
//const solution = (num1, num2) => Math.trunc(num1/num2)