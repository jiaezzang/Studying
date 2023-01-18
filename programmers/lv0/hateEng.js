//영어가 싫어요
//문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return

function solution(numbers) {
    var eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    for(i=0; i<eng.length; i++){
        numbers = numbers.replaceAll(eng[i], i);        //replce() 메서드는 한번만 수행함
    }
    return Number(numbers);
}

//다른 사람의 풀이
function solution(numbers) {
    const obj = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };

    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {      //replace 메서드를 사용하려면 정규식 활용
        return obj[v];
    });

    return Number(num);
}
