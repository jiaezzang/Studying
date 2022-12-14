// 짝수는 싫어요
// n 이하의 홀수 오름차순으로 배열에 넣어 반환하기

function solution(n) {
    var answer = [];
    
    for(i=1; i<=n; i++){
        if(i%2 == 1){       // i가 짝수일 때 
            answer.push(i); // i를 배열에 넣는다.
        }
    }
    return answer;
}


//다른 사람의 풀이
const solution = (n) => 
    Array
        .from({ length: n }, (_, i) => i + 1) // from은 배열이나 객체를 복사해 새로운 배열을 만든다. 0번 인덱스에서 +1해서 1번부터 n번까지 할당
        .filter(i => i % 2 !== 0)             // filter는 배열의 요소를 순회하며 조건에 일치하는 요소만을 모아 새로운 배열을 반환한다.
