function solution(A) {
    var numZeroes = 0;
    var count = 0;

    for (var i = 0; i< A.length; i++) {
        if (A[i] === 0) numZeroes++;
        else if (A[i] === 1) count += numZeroes;
        if (count > 1000000000) return -1;
    }

    return count;
}

var a = [0, 1, 0, 1, 1];

console.log(solution(a));