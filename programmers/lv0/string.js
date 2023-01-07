//문자열 정렬하기
// my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return

function solution(my_string) {
    var answer = my_string.toLowerCase().split('').sort();
    return answer.toString().split(',').join('');
}

//다른 사람의 풀이
function solution(my_string) {
    return my_string.toLowerCase().split('').sort().join('');       //훨씬 간단하게 작성 가능
}