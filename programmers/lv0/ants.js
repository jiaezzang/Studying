//개미 군단
//장군개미 5, 병정개미 3, 일개미 1의 공격력을 지녔을 때 hp가 매개변수로 주어질 때, 
//사냥감의 체력 hp에 딱 맞게 최소한의 병력을 구성하려면 몇 마리의 개미가 필요한지를 return

function solution(hp) {
    var a = Math.trunc(hp/5);       //장군개미의 수
    var b = Math.trunc((hp%5)/3);   //병정개미의 수
    var c = (hp%5)%3;               //일개미의 수 
    
    return a + b + c
}

//다른 사람의 풀이
function solution(hp) {
    return Math.floor(hp/5) + Math.floor((hp%5)/3) + (hp%5)%3;  //나의 풀이를 이런 방식으로 더 간단하게 나타낼 수 있다. 
}