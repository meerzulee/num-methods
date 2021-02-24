let arrayX = () => {

    let arr = []
    let h = 1 / 10000
    for (let i = 0; i <= 10000; i++) {

        arr[i] = h * i

    }
    return arr;
}


let originalFunc = (x, eps, func) => {
    let y = [];

    for (let m = 0; m < x.length; m++) {
        y[m] = func(x[m], eps);
    }

    return y;

}

export { arrayX, originalFunc }