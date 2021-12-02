const acorn = require("acorn")
const walk = require("acorn-walk")

const code = 'for(let i=0;i<10;i+=1){console.log(i);}';
const ast1 = acorn.parse(code, {ecmaVersion:2020});

walk.simple(ast1, {
    Literal(node) {
        console.log(`Found a literal: ${node.value}`);
    }
});

walk.full(ast1, function(node){
    console.log(node.type);
});
