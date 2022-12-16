//머쓱이보다 키 큰 사람
//반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수 반환

function solution(array, height) {
    var answer = 0;
    
    for(i = 0; i<array.length; i++){  //배열 원소 모두 순화
        if(array[i] > height){     //머쓱이보다 키 큰 친구 있을 경우 +1
            answer++;
        }
    }
    
    return answer;
}


//다른 사람의 풀이

function solution2(array, height) { 
    return array.filter((el)=>{return el > height;}).length //머쓱이보다 키 큰 친구만 모아 filter로 배열 재 생성
}


function solution3(array, height) {
    var answer = 0;
    array.forEach(v=> {if(v>height) answer++;})  //forEach 배열의 처음부터 끝까지 반복하여 실행
    return answer;
}