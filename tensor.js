const tf = require('@tensorflow/tfjs-node');

let t1d = tf.tensor1d([1, 2, 3]);
t1d.print();

const t1d_f = tf.tensor1d([1.0,2.0,3.0],'float32')
t1d_f.print();

tf.linspace(1, 10, 10).print();
tf.range(0, 9, 2).print();

let t2d = tf.tensor2d([[0,0],[0,1]]);
t2d.print();

const t_eye = tf.eye(4);
t_eye.print();

let t2d2 = tf.tensor2d([1,2,3,4],[2,2],'float32');
t2d2.print();

let t3d_1 = tf.tensor3d([[[1], [2]], [[3], [4]]]);
t3d_1.print();

tf.tensor3d([1,2,3,4,5,6,7,8],[2,2,2],'int32').print();

tf.tensor4d([[[[1], [2]], [[3], [4]]]]).print();
tf.tensor5d([[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]).print();
tf.tensor6d([[[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]]).print();

const x1 = tf.tensor1d([1, 2, 3, 4, 5, 6, 7, 8]);

tf.diag(x1).print();

tf.zeros([2, 2,2,2,2,2]).print();
tf.ones([3,3,3]).print();
tf.fill([4,4,4],255).print();
tf.truncatedNormal([3,3,3],1,1,"float32",123).print();
tf.truncatedNormal([2,2,2],1,1,"int32",99).print();