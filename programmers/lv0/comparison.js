// 두 숫자가 같을 경우 1, 다를 경우 -1을 반환
function solution(num1, num2){
    if(num1==num2){
        return 1;
    }else{
        return -1;
    }
}

//삼항연산자로 표현하기
function solution2(num1, num2){
    return num1 === num2 ? 1 : -1;
}

//화살표 함수 + 삼항연산자
const solution3 = (num1, num2) => num1 === num2 ? 1 : -1