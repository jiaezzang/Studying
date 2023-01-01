//숨어있는 숫자의 덧셈
//문자열 my_string안의 모든 자연수들의 합을 return
function solution(my_string) {
    var answer = [...my_string];
    var count = 0;
    for(i=0; i<answer.length; i++){
        if(isNaN(answer[i]) == false){   //isNaN 메서드는 매개변수가 숫자일 때 false, 아닐 때 true를 반환한다. 
            count += Number(answer[i]);
        }
    }
    return count;
}


//다른 사람의 풀이
function solution2(my_string) {
    return my_string.replaceAll(/[^\d]/g, '').split('').map(v=>+v).reduce((a,v)=>a+v,0);
}

function solution3(my_string) {
    return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a)+parseInt(b));
}