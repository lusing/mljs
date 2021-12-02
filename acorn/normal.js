let acorn = require("acorn");

try{
    console.log(acorn.parse("let a = 1 );", {ecmaVersion: 2020}));
}catch(e){
    console.error(e);
}
