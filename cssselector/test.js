const parser = require('postcss-selector-parser');
const transform = selectors => {
    selectors.walk(selector => {
        // do something with the selector
        console.log(String(selector))
    });
};

const transformed = parser(transform).processSync('p h1 h2 #hello');
