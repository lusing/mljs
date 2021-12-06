const espree = require("espree");

const code = "for(let i=0;i<10;i+=1){console.log(i);}";

const ast = espree.parse(code, {ecmaVersion: 2020});

console.log(ast);

const tokens = espree.tokenize(code, {ecmaVersion: 2020});
console.log(tokens);

const code2 = 'function greet(input) {return input ?? "Hello world";}';

const ast2 = espree.parse(code2, {ecmaVersion: 2020});

console.log(ast2);

const tokens2 = espree.tokenize(code2, {ecmaVersion: 2020});
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


const code4 = 'let a = 2 ** 8;'

let result1 = babel.transformSync(code4, {
    presets: ["@babel/preset-env"]
});

console.log(result1.code);

// console.log(result.map);
// console.log(result.ast);

// console.log("===");
// result2 = babel.parseSync(code2);
// console.log(result2);


const babelParser = require('@babel/parser');
let ast3 = babelParser.parse(code2, {})
console.log(ast3.program.body);

console.log('<---');

const ast4 = babelParser.parse(code4, {})
console.log(ast4.program.body);
const traverse2 = require("@babel/traverse");
traverse2.default(ast4, {
    enter(path) {
        console.log(path.type);
    }
});

console.log(traverse2);

console.log('--->');

const code_error1 = 'let a = 1;)';

try {
    let ast3 = babelParser.parse(code_error1, {});
} catch (e) {
    console.error(e);
}

const code6 = 'if (a==2) {a+=1};';
const t = require('@babel/types');
const ast6 = babelParser.parse(code6, {})
traverse2.default(ast6, {
    enter(path) {
        if (t.isIdentifier(path.node)) {
            console.log(path.node);
        } else {
            //console.log(path.node);
        }
    }
});
//console.log(ast6);


const code8 = 'if (a==2) {a+=1};';
const ast8 = babelParser.parse(code6, {})
traverse2.default(ast8, {
    enter(path) {
        if (t.isBinaryExpression(path.node, {operator: "=="})) {
            path.node.operator = "===";
        }
    }
});

const generate = require("@babel/generator");
let c2 = generate.default(ast8, {});
console.log(c2.code);

const babelTemplate = require("@babel/template");
const requireTemplate = babelTemplate.default(`
  const IMPORT_NAME = require(SOURCE);
`);

const ast9 = requireTemplate({
    IMPORT_NAME: t.identifier("babelTemplate"),
    SOURCE: t.stringLiteral("@babel/template")
});

console.log(ast9);
console.log(generate.default(ast9).code);

const forTemplate = babelTemplate.default(`
    for(let i=0;i<END;i+=1){
        console.log(i); // output loop variable
    }
`);
const ast10 = forTemplate({
    END: t.numericLiteral(10)
});

console.log(ast10);
console.log(generate.default(ast10).code);

const codeFrame = require("@babel/code-frame");
const rawLines2 = 'let a = isNaN(b);';
const result2 = codeFrame.codeFrameColumns(rawLines2, {
    start: {line: 1, column: 9},
    end: {line: 1, column: 14},
}, {highlightCode: true});

console.log(result2);

const rawLines3 = ["class CodeAnalyzer {", "  constructor()", "};"].join("\n");
const result3 = codeFrame.codeFrameColumns(rawLines3, {
    start: {line: 2, column: 3},
    end: {line: 2, column: 16},
}, {highlightCode: true});

console.log(result3);
