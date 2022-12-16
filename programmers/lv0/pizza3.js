//피자 나눠 먹기(3)
//피자를 두 조각에서 열 조각까지 원하는 조각 수로 잘라주는 피잣집
//피자 조각 수 slice와 피자를 먹는 사람의 수 n이 매개변수로 주어질 때, n명의 사람이 최소 한 조각 이상 피자를 먹으려면 최소 몇 판의 피자를 시켜야 하는지 반환

function solution(slice, n) {
    var pizza = 1;
    while(true){
        if((slice * pizza) / n < 1){ //피자 조각이 인원 수 보다 많아질 때까지 피자를 한 판 씩 늘리며 반복 실행
            pizza++;
        } else {
            break;
        }
    }
    return pizza;
}

//다른 사람의 풀이
function solution2(slice, n) {
    let i = 1;
    while(slice*i<n){           //내가 작성한 조건식보다 더 간단하게 만들었다.
        i++
    }
    return i;
}

function solution3(slice, n) {
    return Math.ceil(n / slice)   //Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 정수를 반환한다.
}