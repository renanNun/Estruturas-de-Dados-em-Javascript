const swap = require('../utils/utils');

function bubbleSort(array, size) {

    if(size < 1) return;

    for(let i = 0; i < size; i++){
        
        if(array[i] > array[i+1]){
            swap(array,i,i+1)
        }
    }

    bubbleSort(array, size-1);
}

module.exports = bubbleSort;