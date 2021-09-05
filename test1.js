let sqr2 = function(x){
    return x * x; 
}
console.log(sqr2(200));

let sqr2_v2 = function(x){
    if (typeof x === 'number'){
        return x * x;
    }else{
        return 0;
    }
}

let isNum = function(x){
    if (typeof x === 'number'){
        return x;
    }else{
        return 0;
    }
}
console.log(sqr2(isNum("20")));

let sqr2_v3 = function(fn, x){
    let y = fn(x);
    return y * y; 
}
console.log((sqr2_v3(isNum,1.1)));

let sqr2_v4 = function(x){
    return sqr2_v3(isNum,x);
}
console.log((sqr2_v4(2.2)));


isNum2 = x => typeof x === 'number';

class MayBeNumber{
    constructor(x){
        this.x = x;
    }

    map(fn){
        if (isNum2(this.x)){
            return MayBeNumber.of(fn(this.x));
        }else{
            return MayBeNumber.of(0);
        }
    }

    ap(num){
        num.map(this.x);
    }

    getValue(){
        return this.x;
    }
}
MayBeNumber.of = function(x){
    return new MayBeNumber(x);
}

console.log(MayBeNumber.of(sqr2).ap(MayBeNumber.of(7.1)));

console.log('=+=')

console.log(Math.sin(undefined));
let num1 = new MayBeNumber(3.3).map(sqr2).getValue();
console.log(num1);
let notnum1 = new MayBeNumber(undefined).map(sqr2).getValue();
console.log(notnum1);
let num3 = new MayBeNumber(3.5).map(sqr2).map(sqr2).getValue();
console.log(num3);
let notnum2 = new MayBeNumber(undefined).map(Math.sin).getValue();
console.log(notnum2);

console.log(sqr2(Math.sin(1)));
let num4 = new MayBeNumber(1).map(Math.sin).map(sqr2).getValue();
console.log(num4);

let num11 = new MayBeNumber(3.3).map(sqr2);
console.log(num11);
let notnum11 = new MayBeNumber(undefined).map(sqr2);
console.log(notnum11);
let num31 = new MayBeNumber(3.5).map(sqr2).map(sqr2);
console.log(num31);

let num5 = MayBeNumber.of(1).map(Math.cos).getValue();
console.log(num5);
let num6 = MayBeNumber.of(2).map(Math.tan).map(Math.exp).getValue();
console.log(num6);


let aa1 = Array.of(1);
console.log(aa1);
console.log(aa1.map(Math.sin));
console.log('===');
console.log([1].map(Math.cos));

class Result{
    constructor(Ok, Err){
        this.Ok = Ok;
        this.Err = Err;
    }

    isOk(){
        return this.Err === null || this.Err === undefined;
    }

    map(fn){
        return this.isOk() ? Result.of(fn(this.Ok),this.Err) : Result.of(this.Ok, fn(this.Err));
    }

    join(){
        if (this.isOk()) {
            return this.Ok;
        }else{
            return this.Err;
        }
    }

    flatMap(fn){
        return this.map(fn).join();
    }
}
Result.of = function(Ok, Err){
    return new Result(Ok, Err);
}

console.log(Result.of(1.2,undefined).map(sqr2));

let sqr2_Result = function(x){
    if (isNum2(x)){
        return Result.of(x*x, undefined);
    }else{
        return Result.of(undefined,0);
    }
}

console.log(Result.of(4.3,undefined).map(sqr2_Result));
console.log(Result.of(4.5,undefined).map(sqr2_Result).join());
console.log(Result.of(4.7,undefined).flatMap(sqr2_Result));

class Applicative{
    constructor(x){
        this.x = x;
    }

    isNothing(){
        console.log("this.x="+this.x);
        return this.x === null || this.x === undefined;
    }

    map(fn){
        console.log("this.x="+this.x);
        if(this.isNothing()){
            return Applicative.of(null);
        }else{
            console.log("mapfn this.x="+this.x);
            console.log("mapfn fn="+fn);
            let v1 = fn(this.x);
            return Applicative.of(v1);
        }
    }

    ap(Obj){
        console.log("this.x="+this.x);
        Obj.map(this.x);
    }
}
Applicative.of = function(x){
    console.log("x="+x);
    let a1 = new Applicative(x);
    console.log(a1);
    return a1;
}

let v2=(Applicative.of(sqr2)).ap(Applicative.of(7.1));
console.log(v2);
console.log(new Applicative(50.41));

const getSpm = function(spm_a, spm_b){
    return [spm_a, spm_b];
}

const getSpmb = function(spm_b){
    return getSpm(1000, spm_b);
}

console.log(getSpmb(1007));
