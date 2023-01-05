//가위 바위 보
//가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
//rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return

function solution(rsp) {
    var answer = rsp.split('');
    var win = [];
    for(i=0; i<answer.length; i++){
        if(answer[i] == '2'){
            win.push(0);
        } else if(answer[i] == '0'){
            win.push(5);
        } else if(answer[i] == '5'){
            win.push(2);
        }
    }   
    return win.toString().split(',').join('');
}

//다른 사람의 풀이
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");  //객체 사용법!! 
    return answer;
}