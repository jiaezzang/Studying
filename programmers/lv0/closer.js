//가까운 수
//정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 반환

function solution(array, n) {
    array.push(n);
    array.sort();               //n을 배열에 넣고 오름차순 정렬
    var x = array.indexOf(n);   //n의 인덱스 번호를 구한 후 모든 경우의 수 조건문에 반영
    if(x==0){
        return array[x+1];
    } else if (x== array.length -1){
        return array[x-1];
    } else if(array[x] - array[x-1] > array[x+1] - array[x]){
        return array[x+1];
    } else if(array[x] - array[x-1] <= array[x+1] - array[x]){
        return array[x-1];
    }
}

//다른 사람의 풀이
function solution2(array, n) {                              //가장 많은 사람이 적은 답변
    const minDiff = Math.min(...array.map(a => Math.abs(a - n)));
    return array.sort((a, b) => a - b).find(a => Math.abs(a - n) === minDiff);
  }