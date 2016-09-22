function solution(A) {
    var sorted = A.slice().sort(function (a, b) { return a - b; });

    for (var i = 0; i < sorted.length - 2; i++) {
        if (sorted[i] + sorted[i + 1] > sorted[i + 2]) {
            return 1;
        }
    }

    return 0;
}

var A = [10, 2, 5, 1, 8, 20];

var result = solution(A);

console.log(result);

