//진료 순서 정하기
//정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return

function solution(emergency) {
    var answer = [];
    var copy = [...emergency];              //배열을 복사
    copy.sort((a,b) => b - a);              //복사한 배열을 내림차순 정렬한다
    for(i=0; i<emergency.length; i++){
        for(j=0; j<copy.length; j++){
            if(emergency[i] == copy[j]){     //원본 배열과 복사한 배열의 요소가 일치할 때 복사한 배열의 index+1이 진료 순서가 된다.
                answer.push(j+1)
            }
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sorted.indexOf(v)+1);          //map 메서드를 사용하면 한 줄로 정리 가능
}