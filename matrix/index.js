// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let arr = new Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n).fill(null);
    }

    let number = 1;

    for (let i=0; i<n-1; i++) {
        for (let r=i; r<n-i; r++) {
            arr[i][r] = number;
            number++;
        }
        for (let d=i+1; d<n-i; d++) {
            arr[d][n-i-1] = number;
            number++;
        }
        for (let l=n-i-2; l>=i; l--) {
            arr[n-i-1][l] = number;
            number++;
        }
        for (let u=n-i-2; u>=i+1; u--) {
            arr[u][i] = number;
            number++;
        }
    }

    return arr;
}

module.exports = matrix;
