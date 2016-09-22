function solution(A, B, K) {
    var top = B - B % K;
    var bottom = A - A % K;

    if (bottom === A) bottom -= K;

    return (top - bottom) / K;
}

var A = 6;
var B = 11;
var C = 2;

//console.log(solution1(A, B, C));
console.log(solution(A, B, C));