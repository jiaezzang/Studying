//0<angle<=180일 때, angle이 예각이면 1, 직각이면 2, 둔각이면 3, 평각이면 4를 반환
function solution(angle) {
    if(angle < 90){
        return 1;
    }else if(angle == 90){
        return 2;
    }else if(angle < 180){ //이미 앞에서 걸러졌으므로 90 < angle 조건은 제외해도 됨
        return 3;
    }else if(angle == 180){
        return 4;
    }
}

//화살표 함수와 삼항연산자로 표현하기
const solution = (angle) => angle < 90 ? 1 : angle == 90 ? 2 : angle < 180 ? 3 : 4