function solution(A) {
    var realSum = 0;
    var N = A.length + 1;
    var expectedSum = N * (N + 1) / 2;

    for (var i = 0; i < A.length; i++) {
        realSum += A[i];
    }

    return expectedSum - realSum;
}

var a = [];
var top = 9999998;
var missing = getRandomInt(1, top - 1);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

for (var i = 1; i < top; i++) {
    if (i === missing) continue;
    a.push(i);
}

shuffle(a);

console.log(missing);
console.log(solution([2]));