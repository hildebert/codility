function solution(S, P, Q) {
    var genoms = { A: [0], C: [0], G: [0], T: [0] };
    var result = [];
    var i;

    for (i = 0; i < S.length; i++) {
        var sums = { A: 0, C: 0, G: 0, T: 0 };
        sums[S[i]] = 1;

        for (var k in genoms) {
            genoms[k][i + 1] = genoms[k][i] + sums[k];
        }
    }

    for (i = 0; i < P.length; i++) {
        var start = P[i];
        var end = Q[i] + 1;

        result[i] = 4;

        if (genoms['A'][end] - genoms['A'][start] > 0) {
            result[i] = 1;
        } else if (genoms['C'][end] - genoms['C'][start] > 0) {
            result[i] = 2;
        } else if (genoms['G'][end] - genoms['G'][start] > 0) {
            result[i] = 3;
        }
    }

    return result;
}

var res = solution('CAGCCTA', [2, 5, 0], [4, 5, 6]);

console.log(res);
