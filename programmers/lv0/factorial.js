//팩토리얼
//정수 n이 주어질 때 i! ≤ n을 만족하는 가장 큰 정수 i를 return

function solution(n) {
    var answer = 1;
    for(i=1; i<=n; i++){        // n=1 일 때를 고려하여 i<=n으로 범위 설정 해준다.
        if(answer*i <= n){
            answer *= i;
        } else {
            break;
        }
    }
    return i - 1;   //break되었을 때의 i 카운트를 빼줌
}

//다른 사람의 풀이
function solution(n) {
    let i = 1;
    let f = 1;
    while (f*i < n) f*=++i;     // while문을 사용하여 작성하면 더 깔끔하게 작성할 수 있다.
    return i;
}

