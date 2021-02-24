let f1 = (x, ep) => {
    return (1 - Math.exp(-x / ep)) / (1 - Math.exp(-1 / ep))

}

let f2 = (x, ep) => {
    return 1 - ((Math.exp(-x / Math.sqrt(ep)) + Math.exp((x - 1) / Math.sqrt(ep))) / (1 + Math.exp(-1 / Math.sqrt(ep))))

}

let f7 = (x, ep) => {
    return ep / (ep + Math.pow((2 * x - 1), 2));
}

let f13 = (x, ep) => {
    if (0 <= x && x <= ((1 - ep) / 2)) {
        return 0
    }
    if (((1 - ep) / 2) < x && x <= (1 / 2)) {
        return ((2 * x - 1) / ep) + 1
    }
    if ((1 / 2) <= x && x < ((1 + ep) / 2)) {
        return ((1 - (2 * x)) / ep) + 1
    }
    if (((1 + ep) / 2) <= x && x <= 1) {
        return 0
    }
}

let builder = (name) => {
    switch (name) {
        case "f1":
            return f1;

        case "f2":
            return f2;

        case "f7":
            return f7;
        case "f13":
            return f13;


    }
}
export default builder;