const valueParser = require('postcss-value-parser');

const hellocss1 = `
#hellocss {
    width: 20px;
}
`

const hellocss = `
#hellocss {
    background-color: blue;
    color: yellow;
    width: 20px;
    transition-property: width;
    transition-duration: 5s;
    transition-timing-function: linear;
    transition-delay: 1s;
}
`

const parsedCss = valueParser(hellocss1);

//console.log(parsedCss);

parsedCss.walk((node) => {
    console.log(node.type, node.value, node.sourceIndex);
});

const s1 = '20px';
const value1 = valueParser.unit(s1);
console.log(value1);
