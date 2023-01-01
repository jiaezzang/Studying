//옷가게 할인 받기
//10만 원 이상 5%, 30만 원 이상 10%, 50만 원 이상 20%를 할인해준다. 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return

function solution(price) {         //삼항연산자로 작성하였으나 풀어 작성하는 것이 보기 더 간단할 듯 함
    var answer = 0;
    (price>=100000 && price<300000) ? answer = price * 0.95 : (price>=300000 && price<500000) ? answer = price*0.9 : (price>=500000) ? answer = price*0.8 : answer = price
    return Math.trunc(answer);
}

//다른 사람의 풀이
const discounts = [   //배열에 금액과 할인율을 넣음
    [500000, 20],
    [300000, 10],
    [100000,  5],
]

const solution = (price) => {
    for (const discount of discounts)  //반복문에서 위의 배열이 돌아가도록 한다.
        if (price >= discount[0])
            return Math.floor(price - price * discount[1] / 100)
    return price
}
