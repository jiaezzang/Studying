//아이스 아메리카노
//money가 매개변수로 주어질 때, 최대로 마실 수 있는 5,500원 짜리 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열 반환
function solution(money) {
    var answer = [];
    var ice = 0;
    while(true){
        if(money>=5500*ice){
            ice ++;
        } else {
            answer.push(ice - 1);
            answer.push(money - (5500 * (ice - 1)));
            break;
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution(money) {
    return [Math.floor(money / 5500), money % 5500]; //floor 함수로 잔 수를 반환하고 money를 5500으로 나누어 간단하게 식 작성
}