function productRecursive(n: number): number {
    if (n <= 1) {
        return 1;
    }
    return n * productRecursive(n - 1);
}

const testNumber = 5;
console.log(productRecursive(testNumber))

