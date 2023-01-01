//자릿수 더하기
//정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return

function solution(n) {
    var numbers = n.toString().split('');  //n의 각 자리 숫자를 배열에 담음
    var answer = 0;
    for (i=0; i<numbers.length; i++){
        answer += Number(numbers[i]);  //배열에 담은 각 수의 누적합 구하기
    }
    return answer;
}

//다른 사람의 풀이
function solution(n) {
    return n
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0);  //reduce 메서드 내에서 Number로 형변환을 함
  }

  function solution(n) {
    return (n+'').split('').map(v=>+v).reduce((a,v)=>a+v,0);    //map으로 형변환을 한 사례
}