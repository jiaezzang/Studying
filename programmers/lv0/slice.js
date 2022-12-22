//배열 자르기
//numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 반환

function solution(numbers, num1, num2) {
    var answer = [];
    for(i=num1; i<=num2; i++){
        answer.push(numbers[i]);
    }
    return answer;
}

//다른 사람의 풀이
function solution2(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1); //slice() 메서드는 어떤 배열의 begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환 
}


function solution3(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1); //splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
}                                             //num1번째 인덱스에서 num2-num1+1개 요소 잘라냄