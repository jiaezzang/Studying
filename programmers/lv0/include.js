//문자열안에 문자열
//문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return

function solution(str1, str2) {
    var answer = 0;
    str1.includes(str2) ? answer = 1 : answer = 2; //includes 메서드를 통해 해당 문자열이 포함되어있는지 확인
    return answer;
}


//다른 사람의 풀이
function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2  //split 메서드를 사용해 str2를 기점으로 문자열이 나누어지는지 확인
}