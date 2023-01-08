//인덱스 바꾸기
//문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return

function solution(my_string, num1, num2) {
    var message = [...my_string];
    let letter = message[num1]
    message[num1] = message[num2]
    message[num2] = letter
    return message.toString().split(',').join('');
}

//다른 사람의 풀이
function solution2(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];  //위 과정 간략화! 배열에 넣어 바꾸기 
    return my_string.join('');
}