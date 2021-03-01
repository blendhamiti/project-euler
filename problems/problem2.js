function evenFibonacciNumbers(number) {
    let res = 0;
    let prev = 0;
    let curr = 1;
    let counter = 0;
    while (counter < number) {
        counter = curr + prev;
        if (counter % 2 === 0)
            res += counter;
        prev = curr;
        curr = counter;
    }
    return res;
}

console.log(evenFibonacciNumbers(4000000));