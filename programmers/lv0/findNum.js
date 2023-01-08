//숫자 찾기
//정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return
function solution(num, k) {
    var answer = 0;
    var num = num.toString().split('');
    for(i=0; i<num.length; i++){
        if(num[i] == k){
            answer = i+1;
            break;
        } else {
            answer = -1;
        }
    }
    return answer;
}


//다른 사람의 풀이
function solution(num, k) {
    var answer = num.toString().indexOf(k);   //k의 인덱스를 바로 찾기..
    return answer === -1 ? -1 : answer += 1;
}
