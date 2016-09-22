function solution(A) {
    var leftSum = 0, rightSum = 0, i, min = Infinity, N = A.length;

    if (N == 2) return Math.abs(A[0] - A[1]);
    if (N == 1) return Math.abs(A[0]);

    for (i = 0; i < N; i++) {
        leftSum += A[i]
    }

    for (i = N - 1; i > 0; i--) {
        rightSum += A[i];

        if (i === N - 1) continue;

        var v = Math.abs(leftSum - rightSum * 2);
        if (min > v) {
            min = v;
        }
    }

    return min;
}

var a = [-10, -20, -30, -40, 100];

console.log(solution(a));