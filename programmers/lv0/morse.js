//모스부호 (1)
//문자열 letter를 영어 소문자로 바꾼 문자열을 return

function solution(letter) {
    var answer = '';
    var morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    var letters = letter.split(' ');    //letter는 문자마다 공백으로 나누어져있기 때문에 공백을 기준으로 자른다
    for(i=0; i<letters.length; i++){
        answer += morse[letters[i]]     //해당 key에 대한 value값 누적하여 반환
    }
    return answer;
}

//다른 사람의 풀이
morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    return letter.split(' ').reduce((prev, curr) => prev + morse[curr], '') //reduce 메서드 사용
    //return letter.split(' ').map(v=>morse[v]).join('');                   //map 메서드 사용
}