function solutionCheck(A) {
    var max = -Infinity;
    var triplet = [];

    for (var i1 = 0; i1 < A.length; i1++) {
        for (var i2 = i1 + 1; i2 < A.length; i2++) {
            for (var i3 = i2 + 1; i3 < A.length; i3++) {
                var p = A[i1] * A[i2] * A[i3];
                if (p > max) {
                    max = p;
                    triplet = [A[i1], A[i2], A[i3]];
                }
            }
        }
    }

    console.log(triplet);

    return max;
}

function solution(A) {
    var l = A.length;
    var sorted = A.slice().sort(function (a, b) { return a - b; });

    var p1 = sorted[l - 1] * sorted[l - 2] * sorted[l - 3];
    var p2 = sorted[l - 1] * sorted[0] * sorted[1];

    return Math.max(p1, p2);
}

var A =  [-3, 1, 2, -2, 5, 6];
//var A = [-5, 5, -5, 4];
//var A = [10, 10, 10];

console.log(solutionCheck(A));
console.log(solution(A));

//console.log(result);

