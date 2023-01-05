//암호 해독
//문자열 cipher와 정수 code가 매개변수로 주어질 때 문자열에서 code의 배수 번째 글자만 진짜 암호! 해독된 암호 문자열을 return

function solution(cipher, code) {
    var letters = cipher.split('');
    var message = [];
    
    for(i=0; i<letters.length; i++){
        if((i+1) % code == 0){
            message.push(letters[i]);
        }
    }
    return message.toString().split(',').join('');
}

//다른 사람의 풀이
function solution(cipher, code) {
    return cipher.split('').filter((v,i)=>(i+1)%code===0).join('');   //filter 메서드 체크. 간단하게 작성하는 연습하기!!
}