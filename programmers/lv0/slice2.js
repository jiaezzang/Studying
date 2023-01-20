//잘라서 배열로 저장하기
//my_str을 길이 n씩 잘라서 저장한 배열을 return

function solution(my_str, n) {
    var answer = [];
    for(i=0; i<my_str.length/n; i++){
        answer.push(my_str.substr(i*n, n));
    }
    return answer;
}

//다른 사람의 풀이
function solution2(my_str, n) {
    let res = [];
    for (let i = 0; i < my_str.length; i+=n) res.push(my_str.slice(i, i+n)); //더 간단하게 작성한 형태
    return res;
}

function solution3(my_str, n) {
    return my_str.match(new RegExp(`.{1,${n}}`, "g")); //정규식 사용 형태
  }