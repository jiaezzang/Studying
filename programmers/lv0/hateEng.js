//영어가 싫어요
//문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return

function solution(numbers) {
    var eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
    for(i=0; i<eng.length; i++){
        numbers = numbers.replaceAll(eng[i], i);        //replce() 메서드는 한번만 수행함
    }
    return Number(numbers);
}

