/**
 * This solution is not using prefix sums, but uses this suggestion:
 * "There must be some slices, with length of two or three, having the minimal average value among all the slices."
 * https://codesays.com/2014/solution-to-min-avg-two-slice-by-codility/
 */
function solution(A) {
    var i, j;
    var index = -1;
    var minAvg = Infinity;

    for (i = 0; i < A.length - 1; i++) {
        var slice = [A[i]];
        var sum = A[i];
        // in the inner cycle we check i + 1 and i + 2 elements, giving total number of
        // iterations ~(2 * A.length)
        for (j = i + 1; j < i + 3; j++) {
            sum += A[j];
            slice.push(A[j]);
            var avg = sum / (slice.length);

            if (minAvg > avg) {
                index = i;
                minAvg = avg;
            }
        }
    }

    return index;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var A = [];

for (var i = 0; i < 9999999; i++) {
    A.push(getRandomInt(-10000, 10000));
}

console.log(solution(A));