//피자 나눠 먹기(2)
//피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
//n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지 반환

function solution(n) {
    var pizza = 1;
    
    while((6 * pizza) % n !== 0 ){  //피자 조각이 딱 맞아떨어질 때까지 
            pizza++;                //판 수를 늘림
    }
    
    return pizza;
}


//다른 사람의 풀이

function solution(n) {
    let count = 1;
    while (!Number.isInteger(count*6/n)) count++;  //Number.isInteger() : 주어진 값이 정수인지 판별
    return count;
}
