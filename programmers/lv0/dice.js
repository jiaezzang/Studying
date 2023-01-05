//주사위의 개수
//각 변의 길이가 n인 주사위를 직육면체 상자 box에 넣고자 할 때 상자에 들어갈 수 있는 주사위 최대 개수 반환
//box[0] = 상자 가로 길이, box[1] = 상자 세로 길이, box[2] = 상자 높이

function solution(box, n) {
    return Math.trunc(box[0]/n) * Math.trunc(box[1]/n) * Math.trunc(box[2]/n);  // trunc 메서드는 정수 부분을 반환한다.
}

//다른 사람의 풀이
function solution2(box, n) {
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);  //reduce 메서드 사용 
}

function solution3(box, n) {
    return box.map(v=>~~(v/n)).reduce((a,v)=>a*v,1);  //map, reduce 메서드 사용
}