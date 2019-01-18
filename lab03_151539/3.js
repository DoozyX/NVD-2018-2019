Array.prototype.fillDefault = function (num) {
    for (let i = 0; i < this.length; ++i) {
        if (this[i] === undefined) {
            this[i] = num;
        }
    }
};
const x = [1, 2, 4];
x[10] = 100;
x[8] = 8;
console.log(x.toString()); // Prints 1,2,4,,,,,,8,,100
x.fillDefault(0);
console.log(x.toString()); // Prinst 1,2,4,0,0,0,0,0,8,0,100