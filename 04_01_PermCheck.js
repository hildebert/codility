function solution(A) {
    if (!A.length) return 0;

    var realSum = 0;
    var N = A.length;
    var expectedSum = N * (N + 1) / 2;
    var occured = [];

    for (var i = 0; i < N; i++) {
        if (occured[A[i]]) return 0;
        realSum += A[i];
        occured[A[i]] = A[i];
    }

    return expectedSum - realSum === 0 ? 1 : 0;
}

console.log(solution([1, 4, 1]));
console.log(solution([2, 2, 2]));