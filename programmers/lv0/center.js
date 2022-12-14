//배열 내 중앙값 구하기

function solution(array) {

    var c = Math.trunc(array.length/2) //배열 내 가장 중간에 위치한 원소를 c로 정의하였다.
    
    array.sort(function(a, b){        //sort()는 배열 내 원소들을 오름차순으로 정렬해준다. 
        return a - b;                 //하지만 숫자의 경우 가장 앞에오는 수만 가지고 비교를 하기 때문에 원소의 차가 음수인지 양수인지 확인하는 작업이 필요하다.
    });
    
    answer = array[c]           //오름차순으로 재정렬한 배열에서 가장 중간에 위치한 원소가 중앙값이 된다.
    
    return answer;
}

//다른 사람의 풀이
const solution = (array) => 
    array
        .sort((a, b) => a - b)
        .at(Math.floor(array.length / 2)) // at()은 index를 대체할 수 있으며 음수 또한 사용 가능하다. (-1의 경우 맨 마지막 값)

