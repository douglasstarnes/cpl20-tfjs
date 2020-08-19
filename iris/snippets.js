let training_features = tf.tensor2d(irisData['data'].slice(0, 30).concat(irisData['data'].slice(50, 80)).concat(irisData['data'].slice(100, 130)), [90, 4]);
let training_targets = tf.oneHot(tf.tensor1d(irisData['target'].slice(0, 30).concat(irisData['target'].slice(50, 80)).concat(irisData['target'].slice(100, 130)), 'int32'), 3);

let testing_features = tf.tensor2d(irisData['data'].slice(30, 50).concat(irisData['data'].slice(80, 100)).concat(irisData['data'].slice(130)), [60, 4]);
let testing_targets = tf.oneHot(tf.tensor1d(irisData['target'].slice(30, 50).concat(irisData['target'].slice(80, 100)).concat(irisData['target'].slice(130)), 'int32'), 3);