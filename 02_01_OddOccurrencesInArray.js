function solution(A) {
    var retval = 0;
    var hash = {};

    for (var i = 0; i < A.length; i++) {
        var v = A[i];

        if (!hash[v]) {
            retval += v;
            hash[v] = 1;
        } else {
            retval -= v;
        }

    }

    return retval;
}

console.log(solution([1, 3, 3, 1, 5, 9, 5, 9, 11, 7, 11]));
