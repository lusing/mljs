const espree = require("espree");

const code = "for(let i=0;i<10;i+=1){console.log(i);}";

const ast = espree.parse(code, { ecmaVersion: 2020 });

console.log(ast);

const tokens = espree.tokenize(code, { ecmaVersion: 2020 });
console.log(tokens);

const code2 = 'function greet(input) {return input ?? "Hello world";}';

const ast2 = espree.parse(code2, { ecmaVersion: 2020 });

console.log(ast2);

const tokens2 = espree.tokenize(code2, { ecmaVersion: 2020 });
console.log(tokens2);

const code3 = `
//Test Class Function
class Test {
    constructor() {
      this.x = 2;
    }
  }`;

const babel = require("@babel/core");
let result = babel.transformSync(code3, {
    presets: ["@babel/preset-env"]
});

console.log(result.code);
// console.log(result.map);
// console.log(result.ast);

// console.log("===");
// result2 = babel.parseSync(code2);
// console.log(result2);


const babelParser = require('@babel/parser');
let ast2 = babelParser.parse(code2, {})
console.log(ast2);
