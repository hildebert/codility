function solution(A, K) {
    var retval = [];

    if (A.length <= 1) return A;

    if (K > A.length) {
        do {
            K -= A.length;
        } while (K > A.length);
    }

    for (var i = 0; i < A.length; i++) {
        var index = i + K;

        if (index > A.length - 1) {
            index -= A.length;
        }

        retval[index] = A[i];
    }

    return retval;
}

var a;

a = [];

console.log(solution(a, 5));