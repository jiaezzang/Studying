//순서쌍의 개수
//자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return

function solution(n) {
    var count = 0;
    for(i=1; i<=n; i++){        //약수를 찾는다.
        if(n%i == 0){
            count ++;
        }
    }
    return count;
}

function solution(n) {
          return Array(n).fill(1).map((v,idx) => v + idx).filter(v => n % v === 0).length  //배열에 담아 그 크기를 반환하ㅡㄴ 방법
    }