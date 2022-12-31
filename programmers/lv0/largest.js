//최댓값 만들기(1)
//정수배열 numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return

function solution(numbers) {
    numbers.sort((a, b) => {return b - a});  //내림차순 정렬하여 반환
    return numbers[0]*numbers[1];
}

//다른 사람의 풀이
function solution(numbers) {
    var answer = 0;
    numbers.sort((a, b) => a - b)
    return Math.max(...numbers) * numbers[numbers.length - 2]   //Math.max 메서드를 사용했다.
}