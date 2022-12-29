//배열 원소의 길이
//문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun

function solution(strlist) {
    var answer = [];
    for(i=0; i<strlist.length; i++){
        answer.push(strlist[i].length)
    }
    return answer;
}

//다른 사람의 풀이
function solution2(strlist) {
    return strlist.map((el) => el.length) //배열을 순회하며 해당 조건에 맞게 배열을 새로 구성함
}