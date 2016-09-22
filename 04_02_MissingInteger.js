function solution(A) {
    var min = 1;
    A = A.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < A.length; i++) {
        if (A[i] > -1 && A[i] === min) {
            min++;
        }
    }

    return min;
}

console.log(solution([-10, 1, 3, 6, 4, 1, 2, 10]));