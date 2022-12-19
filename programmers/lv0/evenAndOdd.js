//짝수 홀수 개수
//정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열 반환

function solution(num_list) {
    var answer = [];
    
    var a = num_list.filter((item) => item%2 == 0) //짝수만 담은 배열 생성
    var b = num_list.filter((item) => item%2 !== 0) //홀수만 담은 배열 생성
    answer.push(a.length);
    answer.push(b.length);
    
    return answer;
}


function solution2(num_list) {
    var answer = [];
    
    var a = num_list.filter((item) => item%2 == 0) //짝수만 담은 배열 생성
    
    answer.push(a.length);
    answer.push(num_list.length - a.length);
    
    return answer;
}

//다른 사람의 풀이
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}