//삼각형의 완성조건(2)
//삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어질 때 나머지 한 변이 될 수 있는 정수의 개수를 return

function solution(sides) {
    var answer = 0;
    var x = sides.sort((a, b) => b-a);
    console.log(x);
    for(side=1; side<x[1]+x[0]; side++){
        if(side<=x[0] && side>x[0]-x[1] ){  //x[1]이 가장 긴 변일 때 (이등변 포함)
            answer++;
        }else if(side<x[1]+x[0] && side>=x[0]){ //side가 가장 긴 변일 때 
            answer++;
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution(sides) {
    return Math.min(...sides)*2-1
}