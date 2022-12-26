//제곱수 판별하기
//정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 반환
function solution(n) {
    if(Math.sqrt(n) % 1 == 0){ //Math.sqrt() 는 매개변수에 루트를 씌워 제곱근을 반환한다
        return 1
    } else {
        return 2
    }
}

//다른 사람의 풀이
function solution2(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2; //Number.isTinteger는 매개변수가 정수인지 판별한다
  }