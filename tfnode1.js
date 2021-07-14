const tf = require('@tensorflow/tfjs-node');

let a = tf.tensor1d([1.0,2.0,3.0]);
console.log(a);

console.log(tf.getBackend());

const yTrue = tf.tensor2d([[0, 1], [3, 4]]);
const yPred = tf.tensor2d([[0, 1], [-3, -4]]);
const mse = tf.metrics.meanSquaredError(yTrue, yPred);
mse.print();

const x = tf.tensor2d(
    [
        [0, 0, 0, 1],
        [0, 1, 0, 0],
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 1, 0]
    ]
);

const y = tf.tensor2d(
    [
        [0, 0, 1, 0],
        [0, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ]
);

const precision = tf.metrics.precision(x, y);
precision.print();
