// 편지
//문자열 Message 한 자를 가로 2cm 크기로 적으려고 할 때 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return

function solution(message) {
    return message.split('').length * 2; //모든 글자를 배열에 넣어서 반환
}


//다른 사람의 풀이
function solution(message) {
    var answer = [...message].length * 2;
    return answer;
}