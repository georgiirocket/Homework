let mass = [5, 's', 3, 10, 7, 1, 10];


Array.prototype.sum = function () {
    let result;
    let arrResult = [];

    for (let i = 0; i < this.length; i++) {

        if (isFinite(this[i])) {
            arrResult.push(this[i]);
        }
    }

    for (let j = 0; j < arrResult.length; j++) {
        if (j == 0) {
            result = arrResult[j];
        } else {
            result = result + arrResult[j];
        }
    }
    return result;
}
console.log(mass.sum());