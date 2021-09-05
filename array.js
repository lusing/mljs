const tf = require('@tensorflow/tfjs-node');

let a1 = [];
a1[2] = 3;
console.log(a1);

let a1_t = tf.tensor1d(a1);
a1_t.print();

for(let i1 of a1){
    console.log(i1);
}

// console.log(a1_t.length);

// for(let i0=0;i0<a1_t.length;i0++){
//     console.log(a1_t[i0]);
// }
/*for(let it_1 of a1_t){
    console.log(it_1);
}*/

let a2 = new Array(5);
a2[9] = 10;
console.log(a2);

let a2_t = tf.tensor1d(a2);
a2_t.print();

a2.length = 15;
let a2_t2 = tf.tensor1d(a2);
a2_t2.print();

let a3 = new Array();
a3.push(1,2,3);
a3.push(4,5);
a3.unshift(6);

let a3_t = tf.tensor1d(a3);
a3_t.print();

let a4 = a3;
let a00 = a3.pop();
console.log(a00);
console.log(a4);

let a5 = []
a5.length = 10;
a5[5] = 100;
console.log(a5);
a5.splice(0,5);
console.log(a5);

a5.splice(1,0,1.5,2.5,3.5);
console.log(a5);

a5.splice(1,0,[1.5,2.5,3.5]);
console.log(a5);