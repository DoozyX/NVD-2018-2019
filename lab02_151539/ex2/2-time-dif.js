const lastCall = () => {
    let time = new Date().getTime();

    return () => {
        const now = new Date().getTime();
        const diff = now - time;
        time = now;
        return diff;
    }
};

const lastCallFunc = lastCall();

console.log(lastCallFunc());
console.log(lastCallFunc());

setTimeout(() => console.log(lastCallFunc()), 1000);