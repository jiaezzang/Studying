//외계어 사전
//spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return
function solution(spell, dic) {
    var count = 0;
    for(i=0; i<dic.length; i++){
        for(j=0; j<spell.length; j++){
            if(dic[i].includes(spell[j]) == true){      //단어를 순회하며 글자가 모두 있는지 확인
                count += 1;
            } else {
                count = 0;
                break;    
            }
        }
        if(count == spell.length){
            return 1;
        } else { 
            count = 0;
        }
    }
    return 2;
}

//다른 사람의 풀이
function solution(spell, dic) {
    return dic.filter(v=>spell.every(c=>v.includes(c))).length ? 1 : 2;  //every 메서드는 함수의 모든 요소에 대해 조건이 충족하는지 
}