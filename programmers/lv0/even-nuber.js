//n이하 짝수의 합 구하기
function solution(n) {
    var answer = 0;
    const arr = [];

    for(i=0; i<=n; i++){
        if(i%2==0){
            arr.push(i);
        }
    }

    answer = arr.reduce((acc, cur) => acc + cur); //배열에 넣어 평균값 반환

    return answer;
}


// 더 간단하게 푸는 방법
function solution2(n) {
    var answer = 0;

    for(let i=2 ; i<=n ; i+=2)
        answer += i;

    return answer;
}


//다른 사람의 풀이
function solution(n) {
    var half = Math.floor(n/2); //숫자 n을 2로 나눈 정수값
    return half*(half+1);
}