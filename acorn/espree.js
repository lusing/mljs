const espree = require("espree");

const code = "let a = 1 )";

const ast = espree.parse(code,{ ecmaVersion: 2020 });

console.log(ast);