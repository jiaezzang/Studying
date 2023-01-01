//배열의 유사도
//문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return

function solution(s1, s2) {
    var count = 0;
    for(i=0; i<s1.length; i++){
        if(s2.includes(s1[i]) == true){ //includes 메서드로 해당 배열에 매개변수가 요소로 있는지 판별
            count++;
        }
    }
    return count;
}

//다른 사람의 풀이
function solution2(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x)); //filter 메서드를 통해 동일한 요소만 골라내여 배열 재형성
    return intersection.length;
}