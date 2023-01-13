//7의 개수
//정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 

function solution(array) {
    return array.join('').split('7').length - 1; //숫자를 모두 붙여 7을 경계로 배열을 만든 후 그 길이를 반환
}