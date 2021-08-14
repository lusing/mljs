function launch(spma, spmb){
    return [spma,spmb];
}

let launch2 = function(spmb){
    return launch("21000",spmb);
}

console.log(launch2("22000"));
