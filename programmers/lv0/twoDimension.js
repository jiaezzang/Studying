//2차원으로 만들기
//배열 num_list의 요소들을 길이가 n인 배열로 잘라 2차원 배열로 재구성하여 반환

function solution(num_list, n) {
    var answer = [];
    var length = num_list.length;
    for(i=0; i<length/n; i++){
        answer.push(num_list.splice(0, n));
    }
    return answer;
}

//다른 사람의 풀이
function solution(num_list, n) {
    var answer = [];

    while(num_list.length) {                //num_list의 길이가 계속 변화하므로 while문을 사용해도 좋음
        answer.push(num_list.splice(0,n));
    }

    return answer;
}