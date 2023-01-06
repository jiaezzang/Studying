//약수 구하기
//정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return
function solution(n) {
    var answer = [];
    for(i=0; i<=n; i++){
        if(n%i == 0){
            answer.push(i)
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0); //map 메서드는 함수로 호출한 결과를 요소로 한 새로운 배열 생성
}