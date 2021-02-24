import { originalFunc } from "@/preprocessing.js"


let lagrange = (N, ep, func, grid) => {
    let x = [];

    let h = 1 / (N - 1);

    if (grid == "g1") {
        for (let i = 0; i < N; i++) {
            x[i] = i * h;
        }
    }
    // chebychev
    if (grid == "g2") {
        for (let j = 0; j < N; j++) {
            x[j] = (1 / 2) * (1 - Math.cos(((2 * j - 1) * Math.PI) / (2 * N)));
        }
    }
    let y = [];
    y = originalFunc(x, ep, func)

    return { x, y }
}

let interp = (x, y, inp) => {
    let res = 0;
    for (let k = 0; k < x.length; k++) {
        let w = 1;
        for (let i = 0; i < x.length; i++) {
            if (i != k) {
                w *= (inp - x[i]) / (x[k] - x[i])
            }

        }
        res += w * y[k];
    }
    return res;
}

export { lagrange, interp };