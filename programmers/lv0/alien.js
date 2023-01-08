//외계행성의 나이
//a는 0, b는 1, c는 2, ..., j는 9이고 나이 age가 매개변수로 주어질 때 외계행성식 나이를 return

function solution(age) {
    var answer = '';
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']; //알파벳과 배열의 인덱스가 매칭됨
    let earth = age.toString().split('');
    
    for(i=0; i<earth.length; i++){
        answer += letters[earth[i]];  //age의 각 자릿수에 적절한 알파벳 반환
    }
    
    return answer;
}

//다른 사람의 풀이
function solution(age) {
    return age
      .toString()
      .split("")
      .map((v) => "abcdefghij"[v])  //문자열 자체도 인덱스가 있기 때문에 바로 추적 가능하다
      .join("");
  }