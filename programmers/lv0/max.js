//가장 큰 수 찾기
//배열 내 가장 큰 수와 그 수의 인덱스를 새로운 배열에 넣어 반환

function solution(array) {
    var answer = [];
    var max = Math.max(...array)  //배열 내 최댓값
    answer.push(max)
    answer.push(array.indexOf(max))  //indexOf()메서드는 배열 내에서 해당 요소를 찾아 인덱스를 반환한다. 
    
    return answer;
}

//다른 사람의 풀이
function solution(array) {
    return [Math.max(...array), array.findIndex(el => el === Math.max(...array))]; //findIndex()는 callback함수로 조건을 전달하고 조건에 부합하는 첫번째 Index를 반환 (없을 경우 0)
}