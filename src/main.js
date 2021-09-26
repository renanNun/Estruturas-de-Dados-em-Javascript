const bubbleSort = require('./sorts/bubblesort');
const selectionSort = require('./sorts/selectionsort');
const mergeSort = require('./sorts/mergesort');

array = [4,6,5,2,3];

console.log("Executando SelectionSort");
console.log("Antes da Ordenação ",array);
mergeSort(array, 0, array.length-1);
console.log("Depois da Ordenação ",array);