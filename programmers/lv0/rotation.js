//배열 회전하기
//정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
//배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return

function solution(numbers, direction) {
    var answer = [];
    if(direction == 'right'){
        answer = [numbers.pop(), ...numbers];  //pop 메서드는 배열 마지막 요소를 꺼내고 배열에서 해당 요소를 삭제함
    } else if (direction == 'left'){
        let removed = numbers.splice(0, 1);  //첫번째 요소를 삭제해줌과 동시에 꺼내는 작업 > splice(0,1)은 0번 인덱스부터 1개의 요소를 꺼낸다는 말
        answer= [...numbers, ...removed];
    }
    return answer;
}

//다른 사람의 풀이
function solution2(numbers, direction) {
    if ("right" == direction) {
        numbers.unshift(numbers.pop()); //unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
    } else {
        numbers.push(numbers.shift()); //shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
    }
    return numbers;
}
