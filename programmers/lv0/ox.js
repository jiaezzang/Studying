//OX퀴즈
//덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다.
//수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return

function solution(quiz) {
    var answer = [];
    for(i=0; i<quiz.length; i++){
        const result = quiz[i].split(' ');
        var x = 0;
        if(result[1] == "+"){
            x = parseInt(result[0]) + parseInt(result[2]);
        } else {
            x = parseInt(result[0]) - parseInt(result[2]);
        }
        if(x == parseInt(result[4])){
            answer.push('O');
        } else {
            answer.push('X');
       }
    }
    return answer;
}

//다른 사람의 풀이

function solution(quiz) {
    return quiz
      .map((el) => el.split(" = "))
      .map((el) => {
        return eval(el[0]) == el[1] ? "O" : "X"; //문자열로 구성된 연산식을 eval() 메서드를 사용해서 연산할 수 있다.
      });
  }
  