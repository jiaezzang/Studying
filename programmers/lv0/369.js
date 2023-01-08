//369게임
// 숫자 order가 매개변수로 주어질 때, 쳐야할 박수 횟수를 return 
function solution(order) {
    var answer = 0;
    var order = order.toString().split('');
    order.forEach((el) => (el==3 || el == 6 || el == 9) ? answer += 1 : answer +=0)  //3, 6, 9 가 있을 때 answer을 1씩 올려준다
    return answer;
}

//다른 사람의 풀이
function solution2(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length; //문자열.matchAll(정규식) : 문자열과 정규식의 매칭 결과를 배열로 반환
    return answer;
}