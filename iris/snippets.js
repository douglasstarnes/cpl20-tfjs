// ASSUME: both irisData.data and irisDaa.target are the same length
let combined = _.zip(irisData.data, irisData.target);
let total_records = irisData.data.length;
let test_portion = .4; // 60% training, 40% testing
let test_records = total_records * test_portion;
let train_combined = combined.slice();
let test_combined = [];
while (test_combined.length < test_records) {
  // randomly pick another record
  let index = Math.floor(Math.random()*train_combined.length);
  test_combined.push(train_combined.splice(index, 1)[0]);
}
let training_features = tf.tensor2d(train_combined.map(t => t[0]), [train_combined.length, 4]);
let training_targets = tf.oneHot(tf.tensor1d(train_combined.map(t => t[1]), 'int32'), 3);
let testing_features = tf.tensor2d(test_combined.map(t => t[0]), [test_combined.length, 4]);
let testing_targets = tf.oneHot(tf.tensor1d(test_combined.map(t => t[1]), 'int32'), 3);
