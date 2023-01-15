//한 번만 등장한 문자
//문자열 s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return

function solution(s) {
    var answer = '';
    const letters = [...s].sort();      //사전순 정렬
    for(i=0; i<letters.length; i++){
        if(letters[i] !== letters[i-1] && letters[i] !== letters[i+1]){ //정렬된 배열을 앞뒤로 비교
            answer += letters[i];
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);  //해당 요소의 인덱스가 해당 요소의 마지막 인덱스라면 배열에 넣음
    return res.sort().join('');
}