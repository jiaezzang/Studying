//등수 매기기
//영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 
//영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 
function solution(score) {
    var answer = [];
    var mean = score.map((el) => (el[0]+el[1])/2);                          //평균값
    var sort = score.map((el) => (el[0]+el[1])/2).sort((a, b) => b - a);    //평균을 내림차순으로 정렬한 값
    count = 1
    for(i=0; i<mean.length; i++){
        for(j=0; j<sort.length; j++){
            if(mean[i]==sort[j]){           //두 배열을 비교해 등수 찾기
                answer.push(j+1);
                break;
            }
        }
    }
    return answer;
}

//다른 사람의 풀이
function solution2(score) {
    let avg = score.map(v=>(v[0]+v[1])/2);
    let sorted = avg.slice().sort((a,b)=>b-a);
    return avg.map(v=>sorted.indexOf(v)+1);     //indexOf로 간단하게 해결
}

