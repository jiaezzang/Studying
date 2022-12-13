//배열 numbers가 가진 원소의 두배가 되는 수를 원소로 가지는 배열을 반환

function solution(numbers) {
    var answer = [];
    
    for(i=0; i<numbers.length; i++){
        answer.push(numbers[i]*2)
    }
    
    return answer;
}

//map() 함수 활용하기
function solution2(numbers) {
    var answer = numbers.map(number => number*2); //map() : 배열 내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
    return answer;
}

//화살표 함수로 간단하게 표현
const solution3 = (numbers) => numbers.map((number) => number * 2) 