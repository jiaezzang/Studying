//모음 제거
//문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return
function solution(my_string) {
    var answer = my_string.split('').filter(el => (el !== 'a')).filter(el => (el !== 'e')).filter(el => (el !== 'i')).filter(el => (el !== 'o')).filter(el => (el !== 'u'));
    return answer.toString().split(',').join('');            //모든 모음을 필터처리하여 제거하였기 때문에 연산이 너무 길게 나옴
}

function solution2(my_string) {
    return my_string.split("").filter((v) => v !== "a" && v !== "e" && v !== "i" && v !== "o" && v !== "u").join("");  //조금 더 간략하게 표현
}

//다른 사람의 풀이
function solution3(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join(''); //모음을 ![] 배열에 넣어서 includes 메서드 사용
}

function solution4(my_string) {
    return my_string.replace(/[aeiou]/g, '');  //정규표현식을 사용하여 모음을 없앰
}