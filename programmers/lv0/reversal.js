//배열 뒤집기
//정수가 들어 있는 배열 num_list의 원소의 순서를 거꾸로 뒤집은 배열 반환
function solution(num_list) {
    var answer = [];
    for(i=(num_list.length - 1); i>=0; i--){
     answer.push(num_list[i])   
    }
    return answer;
}

//다른 사람의 풀이
const solution = (num_list) => num_list.reverse() //reverse () 함수는 배열의 순서를 거꾸로 만들어 준다.