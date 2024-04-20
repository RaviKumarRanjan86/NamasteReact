let arr = [1, 2, [3, [4, [5, [6]]]]]

function sum(arr) {
    let cnt = 0;
    function recurse(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                recurse(arr[i])
            }
            else {
                cnt += arr[i]
            }
        }
    }

    recurse(arr)
    return cnt;
}

console.log(sum(arr))