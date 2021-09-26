function swap(arr, i, j){
    let _arr = arr[i]
    arr[i] = arr[j]
    arr[j] = _arr
}

module.exports = swap;