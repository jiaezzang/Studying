//문자열 뒤집기
//문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return

function solution(my_string) {
    var answer = my_string.split('');   //배열어 넣는다
    answer.reverse();                   //배열 뒤집기
    
    return answer.toString().split(',').join('') //문자열로 반환한다.
}

//다른 사람의 풀이
function solution2(my_string) {
    return my_string.split('').reverse().join('');  //내 풀이를 간략화하면 이렇게 된다.
}

function solution(my_string) {
    var answer = [...my_string].reverse().join(""); //[...my_string]으로 배열에 담는 방법이 있다.
    return answer;
}