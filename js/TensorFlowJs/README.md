# TensorFlow.js
`TensorFlow.js` is a library for developing Machine Learning models in `JavaScript`, so we could build a ML model with only a browser, not a server!!

## How to use
1. Train a model in `Pyhton`(`Keras`).
2. Run [`tensorflowjs_converter` command](https://www.tensorflow.org/js/tutorials/conversion/import_keras) to convert HDF5(`.h5`) file (containing both the model topology and the weights) to `TF.js` Layers format.
In this time, `tensorflowjs_converter` divides the original model information into chunk files of 4MB or less, so we could upload all the weight to Github!! (But, if there are too many files, the browser takes a too much amount of time to load.)
3. Import `TensorFlow.js` in some ways, `npm install @tensorflow/tfjs`, `yarn add @tensorflow/tfjs`, or
```html
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@X.X.X"></script>
```

If you want to know more details, you have to read the [document](https://www.tensorflow.org/).
