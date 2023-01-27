//캐릭터의 좌표

//이 경우 좌표의 순서를 지키지 않고 계산되어 문제가 생김
function solution(keyinput, board) {
    var answer = [];
    var x = 0;
    var y = 0;
    var width = Math.trunc(board[0]/2);
    var height = Math.trunc(board[1]/2);
    
    keyinput.forEach((el) => el == "right" ? x ++ : el == "up" ? y++ : el );
    (Math.abs(x)>width) ? x = width : x;
    (Math.abs(y)>height)? y= height : y;
    console.log(x)
    
    keyinput.forEach((el) => el == "left" ? x -- : el == "down" ? y-- : el );
    (Math.abs(x)>width) ? (x>0) ? x= width : x =-1 * width : x;
    (Math.abs(y)>height) ? (y>0) ? y= height : y= -1 * height : x;
    
    answer.push(x);
    answer.push(y);
    
    return answer;
}

//통과된 답안
function solution(keyinput, board) {
    var answer = [];
    var x = 0;
    var y = 0;
    var width = Math.trunc(board[0]/2);
    var height = Math.trunc(board[1]/2);

    for(i=0; i<keyinput.length; i++){
        if(keyinput[i] == 'right' && x<width){
            x++;
        }else if (keyinput[i] == 'right' && x>=width){
            x= width;
        }else if (keyinput[i] == 'left' && Math.abs(x)<width){
            x--;
        }else if (keyinput[i] == 'left' && Math.abs(x)>=width) {
            x = -1 * width
        }else if(keyinput[i] == 'up' && y<height){
            y++;
        }else if (keyinput[i] == 'up' && y>=width){
            y= height;
        }else if(keyinput[i] == 'down' && Math.abs(y)<height){
            y--;
        }else if (keyinput[i] == 'down' && Math.abs(y)>=width) {
            y = -1 * height;
        }
    }
    
    answer.push(x);
    answer.push(y);
    
    return answer;
}

//친구의 풀이 
function solution(keyinput, board) {
    let result = [0, 0];
    keyinput.forEach((key) => {
        const arr = changeKeyToNum(key);
        result.forEach((d, i) => {
            let limitDown = (board[i] - 1) / 2 * (-1);
            let limitUp = (board[i] - 1) / 2;
            let r = result[i] + arr[i];
            result[i] = limitDown <= r && r <= limitUp ? r : result[i];
        });
    });
    return result;
}

function changeKeyToNum(key) {
    let move = [0, 0];
    switch(key) {
        case 'up' :
            move = [0, 1]
            break;
        case 'down' :
            move = [0, -1]
            break;
        case 'left' :
            move = [-1, 0]
            break;
        case 'right' :
            move = [1, 0]
            break;
    }
    return move
}

//다른 사람의 풀이
function solution(keyinput, board) {
    let res = [0,0];
    for (let p of keyinput) {
        switch(p){
            case 'left': if (-res[0] < board[0]/2-1) res[0]--; break;
            case 'right': if (res[0] < board[0]/2-1) res[0]++; break;
            case 'up': if (res[1] < board[1]/2-1) res[1]++; break;
            case 'down': if (-res[1] < board[1]/2-1) res[1]--; break;
        }
    }
    return res;
}