const parser = require('postcss-selector-parser');
const transform = selectors => {
    selectors.walk(selector => {
        console.log(selector)
        //console.log(selector.type)
    });
};

// parser(transform).processSync('p');
// parser(transform).processSync('.class1');
// parser(transform).processSync('#id1');
// parser(transform).processSync('*');

// parser(transform).processSync('p.class2');
// parser(transform).processSync('div p');

// parser(transform).processSync(':root');
// parser(transform).processSync('div::after');
//parser(transform).processSync('p:nth-child(4)');
// parser(transform).processSync('div > p');
//parser(transform).processSync('div + p');
parser(transform).processSync('a[href^="https"]');
