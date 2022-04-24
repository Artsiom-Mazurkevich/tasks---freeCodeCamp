function diffArray(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    function check(num) {
        if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) {
            return num;
        }
    }
    return newArr.filter(check);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);