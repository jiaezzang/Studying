//대문자와 소문자
//문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return

function solution(my_string) {
    var letters = [...my_string];
    for(i=0; i<letters.length; i++){
        if(letters[i] == letters[i].toUpperCase()){ //대문자일 때 조건문
            letters[i] = letters[i].toLowerCase();
        } else {
            letters[i] = letters[i].toUpperCase();
        }
    }
    return letters.toString().split(',').join('');
}

//다른 사람의 풀이
function solution2(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();  //간단하게 표현하는 방법 익히기
    return answer;
}

function solution3(my_string) {
    return my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('') //map을 사용하여 조회
}