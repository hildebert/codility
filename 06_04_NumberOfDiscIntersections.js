function solution(A) {
    var is = [];
    var i, j;

    for (i = 0; i < A.length; i++) {
        var check = A[i] === 4;
        is[i] = [];
        var start = i - A[i];
        var end = i + A[i];


        if (start < 0) start = 0;
        if (end > A.length - 1) end = A.length - 1;

        console.log(A[i]);
        console.log(start, end);

        for (j = start; j < i; j++) {
            if (is[j].indexOf(i) === -1) {
                is[i].push(j);
            }
        }

        for (j = i + 1; j <= end; j++) {
            is[i].push(j);
        }

        console.log('--------------');
    }

    console.log(is);

    return is.reduce(function (carry, x) {
        return x.length + carry;
    }, 0);
}

//var A = [1, 5];
//var A = [1, 5, 2, 1, 4, 0];
var A = [3, 3, 3, 5, 1, 2];
//var A = [1, 1, 1];

var res = solution(A);

console.log(res);