//k의 개수
//정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return

function solution(i, j, k) {
    var answer = 0;
    var length = j.toString().length;
    for(x=i; x<=j; x++){            //i부터 j까지 
        for(y=0; y<length; y++){    //해당하는 숫자가 몇자리 수인지
            if(parseInt(x.toString().split('')[y]) == k){   //각 자리 수를 배열에 담되 숫자로 반환
                answer += 1
            }   
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution2(i, j, k) {
    let a ='';
    for(i;i<=j;i++){        //숫자를 문자열로 그대로 이어붙임
        a += i;
    }
    return a.split(k).length-1;     //해당 숫자의 문자열을 k로 몇번 끊을 수 있는지
}

