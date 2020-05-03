function positiveSum() {

    let arr = [];

    let sum = arr.filter(i => i > 0).reduce((a, b) => a + b);
    console.log(sum);

}

positiveSum();