//최댓값 만들기(2)
//정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return

function solution(numbers) {
    var answer = numbers.sort((a,b) => b-a);    //내림차순 정렬
    let a = answer[0]*answer[1];            //가장 큰 요소들의 곱
    let b = answer.pop()*answer.pop();      //요소가 음수일 때를 고려한 가장 작은 요소들의 곱
    
    return (a > b) ? a : b
}

//다른 사람의 풀이
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]); //max 메서드를 활용
}