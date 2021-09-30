let acorn = require("acorn");
//for(let i=0;i<10;i+=1){console.log(i);}

console.log(acorn.parse("for(let i=0;i<10;i+=1){console.log(i);}", {ecmaVersion: 2020}));
