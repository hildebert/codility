function solution(N, A) {
    var counters = [], i, j, max = 0, allMax = false;

    for (i = 0; i < N; i++) {
        counters[i] = 0;
    }

    for (i = 0; i < A.length; i++) {
        var X = A[i];

        if (X === N + 1 && !allMax) {
            for (j = 0; j < N; j++) {
                counters[j] = max;
                allMax = true;
            }
        } else if (1 <= X && X <= N) {
            allMax = false;
            counters[X - 1]++;
            if (counters[X - 1] > max) {
                max = counters[X - 1];
            }
        } else {

        }
    }

    return counters;
}

var a = [3, 4, 4, 6, 1, 4, 4];

console.log(solution(5, a));