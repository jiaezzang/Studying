//합성수 찾기
//약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return
function solution(n) {
    var answer = 0;
    for(i=1; i<=n; i++){
        for(j=2; j<i; j++){     //1과 해당 숫자 제외 약수가 있는 경우 카운트
            if(i%j == 0){
                answer += 1;
                break;
            }
        }
    }
    return answer;
}
