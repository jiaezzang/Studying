//유한소수 판별하기

function solution(a, b) {
    const answer = [];
    while (a%2 === 0) {
        answer.push(2);
        a /= 2;
    }
    for (let i = 3; i*i <= a; i += 2) {
        while (a%i === 0) {
        answer.push(i);
        a /= i;
        }
    }
    if (a > 2) answer.push(a);              //소인수분해

    for(i = 0; i < answer.length; i++){
        if(b%answer[i] == 0){
            b = b/answer[i];
        }                                   //약분
    }
    while(b%2 == 0){
        b = b/2
    }
    while(b%5 == 0){
        b = b/5
    }
    
    return (b == 1) ? 1 : 2;
}

//다른 사람의 풀이
function solution2(a, b) {
    return Number((a/b).toFixed(10)) == a/b ? 1 : 2 //자릿수로 구하는 방법
}

function solution3(a, b) {
    let n = 1;
    for (let i = 1; i <= Math.min(a,b); i++) {
        if (a%i===0 && b%i===0) n = i;              //최대 공약수로 나누기
    }

    b/=n;
    while (b%2===0) b/=2;
    while (b%5===0) b/=5;

    return b === 1 ? 1 : 2;   
}