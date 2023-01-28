//로그인 성공
function solution(id_pw, db) {
    var answer = ''; 
    db.forEach((el) => el[0] !== id_pw[0] && el[1] == id_pw[1] ? answer = "fail" : el);
    db.forEach((el) => el[0] == id_pw[0] && el[1] !== id_pw[1] ? answer = "wrong pw" : el);
    db.forEach((el) => el[0] == id_pw[0] && el[1] == id_pw[1] ? answer = "login" : el);
    
    return answer;
}

//친구의 풀이
function solution2(id_pw, db) {
    let login = 0;
    let wrongPw = 0;
    db.forEach(data => {
        if(data[0] == id_pw[0] && data[1] == id_pw[1]) {
            login ++ ;
        } else if(data[0] == id_pw[0] && data[1] != id_pw[1]) {
            wrongPw ++ ;
        }
    });
    if(login > 0) {
        return 'login'
    } else if(wrongPw > 0) {
        return 'wrong pw'
    }
    return 'fail'
}

//다른 사람의 풀이
function solution3(id_pw, db) {
    const [id, pw] = id_pw;
    const map = new Map(db);
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw') : 'fail'; 
  }

  function solution4(id_pw, db) {
    const [ userId, userPw ] = id_pw;
    for (const [ dbId, dbPw ] of db) {
        if (userId === dbId && userPw === dbPw) return "login";
        else if (userId === dbId && userPw !== dbPw) return "wrong pw";
    }
    return "fail";
}