var calls = 0;

function solution(A, B) {
    var stack = [];

    for (var i = 0; i < B.length; i++) {
        stack.push([B[i], A[i]]);
        stack = check(stack);
    }

    return stack.length;
}

function check(stack) {
    if (stack.length < 2) return stack;

    var curr = stack[stack.length - 1];
    var prev = stack[stack.length - 2];

    if (prev[0] === curr[0]) return stack;
    if (prev[0] === 0 && curr[0] == 1) return stack;

    if (prev[1] > curr[1]) {
        stack.pop();
    } else {
        stack.pop();
        stack.pop();

        // this is needed to avoid stack overflow in corner cases
        do {
            prev = stack[stack.length - 1];
            if (!prev) break;
            if (prev[0] === curr[0]) break;
            if (prev[1] > curr[1]) break;
            stack.pop()
        } while(stack.length > 0);

        stack.push(curr);
    }

    return check(stack);
}

//A[0] = 4    B[0] = 0
//A[1] = 3    B[1] = 1
//A[2] = 2    B[2] = 0
//A[3] = 1    B[3] = 0
//A[4] = 5    B[4] = 0

//var A = [4, 3, 2, 1, 5];
//var B = [0, 1, 0, 0, 0];
//
//var A = [6, 2, 3, 4, 5, 0];
//var B = [1, 0, 1, 0, 1, 0];

var maxW = 10000000;

var A = [0];
var B = [];

for (var i = 0; i < maxW; i++) {
    A.push(i);
    B.push(1);
}

B.push(0);

//var A = [0, 1];
//var B = [1, 0];

var res = solution(A, B);

console.log(res);

