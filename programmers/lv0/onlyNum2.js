//문자열 정렬하기(1)
//문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return\

function solution(my_string) {
    var answer = [];
    var letters = my_string.split('');
    for(i=0; i<letters.length; i++){
        if(isNaN(letters[i]) == false){         //isNaN으로 숫자인지 아닌지를 판별
            answer.push(Number(letters[i]));    //배열에 요소를 넣을 때에는 문자가 아닌 숫자로 넣어주어야 하기 때문에 Number 메서드 사용
        }
    }
    return answer.sort();       //sort()를 통한 오름차순 정렬
}

//다른 사람의 풀이
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));  //match 메서드는 정규식에 대해 문자열을 일치시킨 결과를 검색
}                                                                             // \d 는 숫자와 매치시켜준다.; [0-9]와 같음