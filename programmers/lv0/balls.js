//구슬을 나누는 경우의 수
//머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, 
//balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return

function solution(balls, share) {
    var answer = 1;
    for(i=balls; i>(balls-share); i--) answer = answer * i; //balls의 경우의 수
    for(j=(share-1); j>0; j--) share = share * j;           //공을 뽑는 순서는 상관 없으므로
    return answer/share;
}

//다른 사람의 풀이
const 팩토리얼 = (num) => num === 0 ? 1 : num * 팩토리얼(num - 1)       //팩토리얼 함수를 정의

function solution(balls, share) {
  return Math.round(팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share))  //10진법에서 2진법으로 바꾸는 컴퓨터상의 오류를 해결하기 위해 round 메서드로 반올림
}