const tf = require('@tensorflow/tfjs');

let a = tf.tensor1d([1.0,2.0,3.0]);
console.log(a);

console.log(tf.getBackend());
