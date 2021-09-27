const bubbleSort = require('./sorts/bubblesort');
const insertionSort = require('./sorts/insertionsort');
const selectionSort = require('./sorts/selectionsort');
const mergeSort = require('./sorts/mergesort');
const heapSort = require('./sorts/heapsort');
const quickSort = require('./sorts/quicksort');
const shellSort = require('./sorts/shellsort');

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let n = 5;

let array = [];
for(let i = 0; i < n; i++){
    array.push(getRandomNumber(-10,10));
}

console.log("Array Original: ", array);

console.log("Executando Algoritmos de Ordenação!");

// Bubblesort
let arr = array.map((x) => x);
bubbleSort(arr, arr.length);
console.log("Resultado do bubblesort: ", arr);

// Insertionsort
arr = array.map((x) => x);
insertionSort(arr, 0, arr.length-1);
console.log("Resultado do insertionsort: ", arr);

// Selectionsort
arr = array.map((x) => x);
selectionSort(arr, arr.length);
console.log("Resultado do selectionsort: ", arr);

// Mergesort
arr = array.map((x) => x);
mergeSort(arr, 0, arr.length-1);
console.log("Resultado do mergesort: ", arr);

// Heapsort
arr = array.map((x) => x);
heapSort(arr, arr.length);
console.log("Resultado do heapsort: ", arr);

// Quicksort
arr = array.map((x) => x);
quickSort(arr, 0, arr.length-1);
console.log("Resultado do quicksort: ", arr);

// Shellsort
arr = array.map((x) => x);
shellSort(arr, arr.length-1);
console.log("Resultado do shellsort: ", arr);