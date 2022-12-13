//두 수를 곱한 값이 1000을 곱한 후 정수부분 반환

function solution(num1, num2) {
    var answer = parseInt(num1/num2*1000) //parseInt 이외에도 Math.trunc와 양수라는 전제 하에 math.floor로도 정수부분을 반환할 수 있다.
    return answer;
}

//화살표 함수로 표현하기
const solution2 = (num1, num2) => Math.trunc(num1/num2*1000)
