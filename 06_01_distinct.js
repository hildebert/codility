// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function solution(A) {
    if (!A.length) return 0;

    A.sort(function (a, b) {
        return a - b;
    });

    var count = 1;
    var lastElement = A[0];

    for (var i = 1; i < A.length; i++) {
        if(A[i] != lastElement){
            count++;
            lastElement = A[i];
        }
    }

    return count;
}

console.log('result', solution([5,6,7,7,2,3]));
console.log('result', solution([]));
console.log('result', solution([1]));