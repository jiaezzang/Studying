//문자 반복 출력하기
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return

function solution(my_string, n) {
    var answer = [...my_string];
    var letters = [];
    for(i=0; i<answer.length; i++){
        letters.push(answer[i].repeat(n));  //repeat 메서드는 해당 문자를 매개변수만큼 반복해서 반환함
    }
    
    return letters.toString().split(',').join('');
}

//다른 사람의 풀이
function solution2(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");   //map 메서드를 사용하여 구현
    return answer;
}

function solution3(my_string, n) {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')  //reduce 메서드 사용
}