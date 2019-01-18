console.log("Testing Singleton!");
const Singleton = (() => {
    class Singleton {
        constructor() {
            this.name = "Doozy";
            const mDate = new Date();
            this.dateCreated = () => {
                return mDate;
            }
        }
    }

    let instance;
    return {
        getInstance: () => {
            if (!instance) {
                instance = new Singleton();
                instance.constructor = null;
                return instance;
            }
            return instance;
        }
    }
})();

console.log("Creating i1");
const i1 = Singleton.getInstance();
console.log("i1 was created at time:", i1.dateCreated());
setTimeout(() => {
    console.log("Creating i2 at time:", Date.now());
    const i2 = Singleton.getInstance();
    console.log("i2 was created with time:", i1.dateCreated());
    console.log("Checking if i1 and i2 are the same variable:", i1 === i2);
    let i3;
    const test = () => {
        i3 = Singleton.getInstance();
    };
    test();
    console.log("Creating i3 in different execution context at time:", Date.now());
    console.log("i3 was created with time:", i3.dateCreated());
    console.log("Checking if i1 and i3 are the same variable:", i1 === i3);
    console.log("Checking if i2 and i3 are the same variable:", i2 === i3);
    console.log("Checking if i1 and i2 are the same variable:", i1 === i2);
}, 1);