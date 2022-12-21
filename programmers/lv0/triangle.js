//삼각형의 완성조건(1)
//삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어질 떄 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2 반환

function solution(sides) {
    sides.sort();           //오름차순으로 재정렬
    
    if(sides[0] + sides[1] > sides[2]){
        return 1;
    } else {
        return 2;
    }
    
}

//다른 사람의 풀이
function solution2(sides) {
    sides = sides.sort((a,b) => a-b)    //a-b의 경우 오름차순, b-a는 내림차순
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}

function solution3(sides) {
    var answer = 0;
    const max = Math.max(...sides);   //가장 큰 수 구하기
    const sum = sides.reduce((a,b) => a + b, 0) - max;  //나머지 두 수의 합 구하기

    answer = max < sum? 1 : 2;

    return answer;
}