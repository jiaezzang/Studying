//중복된 숫자 개수
//정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지 반환

function solution(array, n) {
    var answer = 0;
    for(i=0; i<array.length; i++){  // 배열 순회
        if(array[i] == n){          // 배열의 요소가 n일 때 카운트
            answer++;
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution2(array, n) {
    var answer = 0;
    let Array = array.filter((item) => item === n) //filter로 조건에 맞는 요소만 모아 새 배열 생성
    answer = Array.length

    return answer;
}

function solution3(array, n) {               //위의 식을 더 간결하게 나타냄
    return array.filter(v=>v===n).length;
}