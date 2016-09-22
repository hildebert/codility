function solution(n) {
    var maxGap = 0;
    var leftIndex = -1;
    var rightIndex = 0;

    while (n > 0) {
        rightIndex = Math.log2(n & -n);

        if (leftIndex > -1 && rightIndex - leftIndex > maxGap) {
            maxGap = rightIndex - leftIndex - 1;
        }

        leftIndex = rightIndex;
        rightIndex = 0;
        n = n & (n - 1);
    }

    return maxGap;
}

console.log((1024).toString(2));
console.log(solution(8));
