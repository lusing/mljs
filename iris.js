const irisDataset = require('ml-dataset-iris');
const DecisionTreeClassifier = require('ml-cart');

const trainingSet = irisDataset.getNumbers();
const predictions = irisDataset
  .getClasses()
  .map((elem) => irisDataset.getDistinctClasses().indexOf(elem));

const options = {
  gainFunction: 'gini',
  maxDepth: 10,
  minNumSamples: 3,
};

const classifier = new DecisionTreeClassifier.DecisionTreeClassifier(options);
classifier.train(trainingSet, predictions);
const result = classifier.predict(trainingSet);

console.log(result);
