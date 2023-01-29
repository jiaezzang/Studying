//직사각형 넓이 구하기
//네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return
function solution(dots) {
    var width = [];
    var height = [];
    
    for(i=0; i<dots.length; i++){
        width.push(dots[i][0]);
        height.push(dots[i][1]);
    }
    
    width.sort((a,b) => a-b);           //Math.min(), Math.max()로 추출하는 것이 더 간편함
    height.sort((a,b) => a-b);
    
    return (width[2] - width[0]) * (height[2] - height[0]);
}