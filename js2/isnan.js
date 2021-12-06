const babel = require("@babel/core");
const babelParser = require('@babel/parser');


const code1 = "let a = isNaN(b);"

const ast1 = babelParser.parse(code1, {})
console.log(ast1.program.body);
const traverse = require("@babel/traverse");
traverse1.default(ast1, {
    enter(path) {
        console.log(path.type);
    }
});
