//숫자로 이루어진 배열 원소의 평균값 반환
function solution(numbers) {
    var answer = 0;
    for(i=0; i<numbers.length; i++){
        answer += numbers[i];    
    }
    return answer/numbers.length;
}

//for문은 다음과 같이 작성할 수도 있다.
function solution2(numbers) {
    var answer = 0;
    for(i of numbers) {  //for문에 of가 쓰였을 땐 배열 내 원소를 순회하도록 한다.
        answer += i
    }
    return answer / numbers.length;

}

//reduce 함수 사용하기 (화살표함수+3항연산자)
const solution3 = (numbers) => numbers.reduce((acc, cur) => acc + cur) / numbers.length
//reduce 함수의 형식은 다음과 같다
// array.reduce(callback(accumulator, currentValue[, index[, array]] )[, initialValue])
// 누적 값(accumulator), 현재 값(currentValue), 현재 인덱스 (index), 원본 배열(array)
// 초기값을 지정하지 않으면 0번 인덱스 값이 초기값으로 지정된다.