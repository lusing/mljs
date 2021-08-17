const times = (times, fn) => {
    for(let i=0;i<times;i++){
        fn(i);
    }
}

const every2 = (arr, fn) => {
    let result = true;
    for(let i=0;i<arr.length;i++){
        result = result && fn(arr[i]);
    }
    return result;
}

const every = (arr, fn) => {
    let result = true;
    for(const value of arr){
        result = result && fn(arr[i]);
    }
}

const some = (arr,fn) => {
    let result = false;
    for(const value of arr){
        result = result || fn(arr[i]);
    }
}

let fn1 = (arg) => {
    let outer = "Visible";
    let innerFn = () => {
        console.log(outer);
        console.log(arg);
    }
    return innerFn;
}

let closureFn = fn1(5);
closureFn();

const tap = (value) => {
    (fn) => {
        typeof(fn) === 'function' && fn(value);
        console.log(value);
    }
}

const unary = (fn) => {
    fn.length === 1 ? fn : ((arg) => fn(arg));
}


//console.log(['1','2','3'].map(unary(parseInt)));
//console.log(["1","2","3"].map(unary(parseInt)));
console.log(unary(parseInt));
console.log(parseInt.length);
console.log(parseInt("1"));

let f1 = (arg) => parseInt(arg);
console.log(['1','2','3'].map(f1));

const once = (fn) => {
    let done = false;
    return function() {
        return done ? undefined : ((done=true), fn.apply(this,arguments));
    }
}

let init_data = once(
    () => {
        console.log("Initialize data");
    }
);

init_data();
init_data();

let doPayment = once( () =>{
    console.log("Payment has done");
});

doPayment();
doPayment();

let factorial = (n) => {
    if (n===0){
        return 1;
    }
    return n*factorial(n-1);
}

console.log(factorial(10));

const memo = (fn) => {
    const cache = {};
    return (arg) => cache[arg] || (cache[arg] = fn(arg));
}

let fastFact = memo(
    (n) => {
        if (n<=0){
            return 1;
        }else{
            return n * fastFact(n-1);
        }
    }
);

console.log(fastFact(10));
