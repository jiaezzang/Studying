//공 던지기

function solution(numbers, k) {
    var l = numbers.length;
    k = (k - 1) * 2;
    while(k > l) {
        k = k >= l ? k - l : l - k;
    }
    var answer = numbers[k];
    return answer;
}

//다른 사람의 풀이
function solution(numbers, k) {
    return numbers[(--k*2)%numbers.length]; //더 간단한 식으로 표현 가능
}