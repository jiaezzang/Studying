//첫 번째 분수의 분자와 분모를 뜻하는 denum1, num1, 두 번째 분수의 분자와 분모를 뜻하는 denum2, num2가 매개변수로 주어집니다. 
//두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(denum1, num1, denum2, num2) {
    var answer = [];
    var denum3 = denum1*num2 + denum2*num1; //두 분수를 합했을 때의 분자
    var num3 = num1*num2;                   //두 분수를 합했을 때의 분모

    for(i=num3; i>0; i--){

        if(denum3%i==0 && num3%i==0){       //약분 가능한 경우 배열에 추가
            answer.push(denum3/i);
            answer.push(num3/i);
        }

    }

    answer.length = 2; //최대 공약수에 의해 약분되어 처음으로 나온 분자 분모만 배열에 남긴다.
                       //이대로 break; 할 경우 첫 값으로 null이 들어가 빈 배열이 나온다. 아직 원인을 찾지 못함.
    return answer;
}


//다른 사람의 풀이 : 최대 공약수를 먼저 구해 간단하게 작성
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

function solution2(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let gcd = fnGCD(denum, num); //최대공약수

    return [denum/gcd, num/gcd];
}