function solution(X, A) {
    var leaves = [];
    var nullCount = X;
    var i;

    for (i = 0; i < X + 2; i++) {
        leaves[i] = null;
    }

    for (i = 0; i < A.length; i++) {
        var v = A[i];
        if (v > X) continue;

        if (!leaves[v]) {
            leaves[v] = v;
            nullCount--;
        }

        if (nullCount === 0) {
            return i;
        }
    }

    return -1;
}

var a = [1, 3, 1, 4, 2, 3, 4, 4];

console.log(solution(5, a));

a = [1, 3, 1, 4, 2, 3, 5, 4];

console.log(solution(5, a));
