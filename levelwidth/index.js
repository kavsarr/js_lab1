// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let result = [1];

    let pre_arr = [root];
    let next_arr = [];

    while (pre_arr!==null) {
        for (let i=0; i<pre_arr.length; i++) {
            next_arr.push(...pre_arr[i].children)
        }

        if (next_arr.length>0) {
            pre_arr = next_arr;
            result.push(pre_arr.length)
        }
        else {
            pre_arr = null;
        }
        next_arr = [];
    }
    
    return result;
}

module.exports = levelWidth;
