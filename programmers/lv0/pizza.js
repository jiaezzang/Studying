//피자 나눠 먹기(1)
//피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 반환

function solution(n) {
    var pizza = 0;
    
    for(i=1; i<=n; i++){
        if(1 <= 7*i/n){  //피자 조각을 인원 수로 나누었을 때 1 이상의 값을 가져야 한다.
            pizza = i;
            break;      //최초로 조건을 맞추었을 때 for문을 멈추고 해당 값을 반환한다.
        }
    }
    return pizza;
}


//다른 사람의 풀이
function solution2(n) {
    return Math.ceil(n / 7) //Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 정수를 반환한다.
}

function solution3(n) {
    return n % 7 === 0 ? n / 7 : parseInt(n / 7) + 1; //피자 조각 수가 맞아 떨어질 때와 아닐 때를 구분하여 조건식으로 구현
}