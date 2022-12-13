//2022년 기준 태어난 년도 구하기

function solution(age) {
    var year = 2022 - age + 1;
    return year;
}

//화살표 함수로 표현하기
const solution2 = (age) => 2022 - age + 1