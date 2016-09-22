function solution(S) {
    var open = [];

    var opposing = { '}': '{', ')': '(', ']': '[' };

    for (var i = 0; i < S.length; i++) {
        if (S[i] === '{' || S[i] === '(' || S[i] === '[') {
            open.push(S[i]);
        } else if (open[open.length - 1] != opposing[S[i]]) {
            return 0;
        } else {
            open.pop();
        }
    }

    return open.length === 0 ? 1 : 0;
}

console.log(solution('{[()()]}'));
console.log(solution('({})'));
console.log(solution('{{{{'));