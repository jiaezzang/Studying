//문자열 계산하기
//문자열로 된 수식 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return

function solution(my_string) {
    var my_string = my_string.split(' ');
    var answer = Number(my_string[0]);  //가장 먼저 나타나는 숫자에 연산자에 따라 뒤의 값을 누적해나간다

    for(i=0; i<my_string.length; i++){
        if(my_string[i] == '+'){
            answer += Number(my_string[i+1]);
        } else if(my_string[i] == '-'){
            answer -= Number(my_string[i+1]);
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution(my_string) {
    const arr = my_string.split(' ').filter(e=>e);
    while(arr.length > 1) arr.unshift(+arr.shift() + (arr.shift() === "+" ? 1 : -1) * arr.shift())  //shift()는 배열에서 첫번째 요소를 제거하고 나머지를 반환
    return arr[0]                                                                                   //unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
}