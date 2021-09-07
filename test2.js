
function click(gokey, spmcd = "0.0", params = {}, customParams = {}) {
    console.log(gokey);
    console.log(spmcd);
}

let click2 = function(...args){
    return click("/ju.tbch",...args);
}

click2("1.1");


