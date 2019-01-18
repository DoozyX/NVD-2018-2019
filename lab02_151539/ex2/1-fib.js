const fib = () => {
    let first = 0;
    let second = 1;

    return () => {
        const fib = first + second;
        first = second;
        second = fib;
        return fib;
    }
};

const fibNext = fib();

console.log(fibNext());
console.log(fibNext());
console.log(fibNext());
console.log(fibNext());
console.log(fibNext());