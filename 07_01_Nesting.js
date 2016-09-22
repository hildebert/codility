function solution(S) {
    var opens = 0;

    for (var i = 0; i < S.length; i++) {
        if (S[i] === '(') opens++;
        if (S[i] === ')') opens--;
        if (opens < 0) return 0;
    }

    return opens === 0 ? 1 : 0;
}

console.log(solution('(()(())())'));
console.log(solution('())'));
console.log(solution(')('));