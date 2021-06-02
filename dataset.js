let datasets = require( '@stdlib/datasets' );
let data = datasets( 'MONTH_NAMES_EN' );
console.log(data);

const capitals = require( '@stdlib/datasets/us-states-capitals' );
const data_c = capitals();
console.log(data_c);

const Normal = require( '@stdlib/stats/base/dists/normal' ).Normal;
let dist1 = new Normal( 0, 1 );
console.log(dist1);
let m1 = dist1.mean;
console.log(m1);
let v1 = dist1.variance;
console.log(v1);