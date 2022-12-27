//특정 문자 제거하기
//문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return

function solution(my_string, letter) {
    var answer = my_string.split('');   //문자열을 문자 하나하나로 쪼개서 배열에 담는다.
    answer = answer.filter(el => (el !== letter)); //filter 메서드로 letter와 일치하는 요소를 걸러낸다.
    
    return answer.toString().split(",").join(""); //toString메서드로 반환하되 쉼표로 구분되므로 ","를 구분자로 하는 것을(split) ""로 합친다(join).
}


//다른 사람의 풀이
function solution2(my_string, letter) {
    const answer = my_string.split(letter).join('') //충격적으로 쉬움.. lettr를 인자로 나누고 다시 합쳤다.
    return answer;
}