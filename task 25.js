function sumAll(arr) {
    let n = Math.min(...arr);
    let m = Math.max(...arr);
    let c = n;
    let k = n
    for (let i = n; i < m; i++) {
        c += 1;
        k += c;
    }
    return k
}

sumAll([1, 4]);