//문자열 밀기
function solution(A, B) {
    var answer = 0;
    var C = A.repeat(100);      //문자열을 100번 반복
    for(i=0; i<C.length; i++){
        if(C.substr(C.length - A.length - i, A.length) == B){ //오른쪽에서 미는 것이므로 뒤에서부터 문자열 자름
            answer = i;
            break;
        }else{
            answer = -1;
        }
    }
    return answer;
}

//다른 사람의 풀이
let solution=(a,b)=>(b+b).indexOf(a)        //b를 연결해서 a가 있는지 확인

function solution(A, B) {
    if (A===B) return 0;
    for (let i = 0; i < A.length; i++) {
        A = A.slice(-1) + A.slice(0,-1);       //slice해서 붙이기
        if (A === B) return i+1;
    }
    return -1;
}
