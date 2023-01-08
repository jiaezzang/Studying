//중복된 문자 제거
//문자열 my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return

function solution(my_string) {
    let a = [...my_string];
    let b = new Set(a);         //Set 메서드는 중복된 요소를 제거해준다
    let answer = [...b];
    
    return answer.join('');
}

//다른 사람의 풀이
function solution2(my_string) {
    return [...new Set(my_string)].join('');  //더 간단하게 작성한 형태
}