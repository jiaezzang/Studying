//양꼬치 10인분을 먹을 때 음료를 서비스로 하나를 주는 음식집에서 
//1인분에 12000원인 양꼬치 n인분, 1병에 2000원짜리 음료수 k병을 마셨을 때 지불해야 할 가격 반환 

function solution(n, k) {
    var answer = 12000*n + 2000*(k - Math.trunc(n/10)); //서비스로 받은 음료 제외하여 계산

    return answer;
}

//다른 사람의 풀이 : 틸트 문법
function solution2(n, k) {

    k-=~~(n/10);            //~~는 Math.floor()와 동일하게 사용되는 연산자이다.
    if (k < 0) k = 0;
    
    return n*12000+k*2000;
}