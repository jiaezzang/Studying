//직각삼각형 출력하기
//"*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고할 때 높이와 너비가 n 인 직각 이등변 삼각형을 출력

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    var answer = '';
    for(i=1; i<=input; i++){
        answer += '*'.repeat(i) + '\n'  //'*'을 n번 반복하고 줄바꿈해줌
    }
    console.log(answer);
});


//다른 사람의 풀이
const readline = require('readline');
const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input2 = [];

rl2.on('line', function (line) {
    input2 = line.split(' ');
}).on('close', function () {
    for (let i = 1; i <= +input2[0]; i++) {
        console.log('*'.repeat(i));         //아예 console.log로 감싸면 따로 줄바꿈 해줄 필요가 없다.
    }
});
