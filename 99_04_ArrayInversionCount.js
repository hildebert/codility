function solution(A) {
    var inversions = 0;

    function merge(left, right) {
        var merged = [];

        var ll = left.length;
        var rl = right.length;
        var i = 0;
        var j = 0;

        while (i < ll || j < rl) {
            if (i < ll && j < rl) {
                if (left[i] <= right[j]) {
                    merged[i + j] = left[i];
                    i++;
                } else {
                    inversions += ll - i;
                    merged[i + j] = right[j];
                    j++;
                }
            } else if (i < ll) {
                merged[i + j] = left[i];
                i++;
            } else if (j < rl) {
                merged[i + j] = right[j];
                j++;
            }
        }

        return merged;
    }

    function mergeSort(array) {
        var c = array.length;

        if (c < 2) return array;

        var mid = Math.floor(c / 2);

        var left = mergeSort(array.slice(0, mid));
        var right = mergeSort(array.slice(mid, array.length));

        return merge(left, right);
    }

    mergeSort(A);

    if (inversions > 1000000000) return -1;

    return inversions;
}

var A = [-1, 6, 3, 4, 7, 4];

console.log(solution(A));