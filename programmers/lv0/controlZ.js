//컨트롤 제트
//문자열 s 내 숫자를 모두 더하되 "Z" 이전에 등장한 숫자는 뺀 값을 return

function solution(s) {
    var answer = 0;
    var number = s.split(" ");
    number.forEach((el,i) => el === 'Z' ? answer -= Number(number[i-1]) : answer += Number(el)); //forEach로 배열을 순회하며 Z가 등장하면 이전 숫자를 뺴고 아닐경우 해당 숫자를 더함
    return answer;
}

//다른 사람의 풀이
function solution(s) {
    const stack = []

    s.split(' ').forEach((target) => {
        if(target === 'Z') stack.pop();         //stack구조로 생각하면 처리가 쉬움
        else stack.push(+target)
    })

    return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}