//캐릭터의 좌표

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