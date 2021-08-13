const Container = function(val){
    this.value = val;
}

let testValue = new Container(3);
console.log(testValue);

let testObj = new Container({a:1});
console.log(testObj);

let testArray = new Container([1,2,3]);
console.log(testArray);

Container.of = function(value){
    return new Container(value);
}

let a1 = Container.of(Container.of(3));
console.log(a1);

Container.prototype.map = function(fn){
    return Container.of(fn(this.value));
}

let double = x => x + x;
let a2 = Container.of(3).map(double);
console.log(a2);

const MayBe = function(val){
    this.value = val;
}

MayBe.of = function(val){
    return new MayBe(val);
}

MayBe.prototype.isNothing = function() {
    return this.value === null || this.value === undefined;
}

MayBe.prototype.map = function(fn){
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value)); 
}


function launch(spma, spmb){
    return [spma,spmb];
}

let launch2 = function(spmb){
    return launch("21000",spmb);
}

console.log(launch2("22000"));
