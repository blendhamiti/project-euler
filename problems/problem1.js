function multiplesOf3and5(number) {
    let res = 0;
    let counter = 1;
    while (counter < number) {
        if (counter % 3 === 0)
            res += counter;
        else if (counter % 5 === 0)
            res += counter;
        counter++;
    }
    return res;
}

console.log(multiplesOf3and5(1000));