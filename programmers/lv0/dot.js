//점의 위치 구하기
// x축고 y축의 위치를 담은 배열 dot이 주어질 때 해당 배열이 사분면 중 어디에 위치하는지 반환
function solution(dot) {
    return (dot[0]>0) ? ((dot[1]>0) ? 1 : 4) : ((dot[1]>0) ? 2 : 3)  //아래 과정을 한 줄로 줄여 쓴 것
}

function solution2(dot) {
    if(dot[0]>0){
        if(dot[1]>0){
            return 1;
        } else {
            return 4
        }
    } else {
        if(dot[1]>0){
            return 2
        } else {
            return 3
        }
    }
}

//다른 사람의 풀이
function solution3(dot) {
    return dot[0]*dot[1] > 0 ? (dot[0]>0 ? 1 : 3) : (dot[0] > 0 ? 4 : 2)  //두 수의 곱이 양수인지 음수인지에 따라 나누어 조건문 설정
}