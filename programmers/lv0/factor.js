//소인수 분해
//자연수 n이 매개변수로 주어질 때 n의 소인수를 오름차순으로 담은 배열을 return

function solution(n) {
    var answer = [];
    for(i=2; i<=n; i ++){
        if(n%i == 0){
            answer.push(i)              //약수를 배열에 전부 넣는다
            for(j=2; j<i; j++){
                if(i%j == 0){
                    answer.splice(answer.indexOf(i), 1);    //소수가 아닐 경우 배열에서 삭제
                    break;
                }
            }
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution(n) {
    var answer = [];
    for(let i = 2; i <= n; i++) {
        while (n % i === 0) {
            n = n / i;
            answer.push(i);
        }
    }
    return [...new Set(answer)];
}