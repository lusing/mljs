let acornLoose = require("acorn-loose");

console.log(acornLoose.parse("let a = 1 );", { ecmaVersion: 2020 }));
