//숨어있는 숫자의 덧셈(2)
//소문자, 대문자, 자연수로만 구성된 문자열 my_string안의 자연수들의 합을 return

function solution(my_string) {
    var answer = 0;
    var number = my_string.match(/\d+/g);   //정규식 사용 : d+는 숫자로 된 문자 1개 이상인 문자열, g는 모든 패턴을 찾으라는 의미
    (number !== null) ? number.forEach((el) => answer += Number(el)) : answer = 0;
    return answer;
}

//다른 사람의 풀이
function solution2(my_string) {
    return my_string.toLowerCase().replace(/[a-z]/g, " ").split(" ").map((v) => v*1).reduce((a,b) => a+b)
}                                   //문자열을 공백으로 대체하여 숫자만 반환

function solution3(my_string) {
    return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
  }