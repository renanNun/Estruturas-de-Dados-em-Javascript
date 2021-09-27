const swap = require("../utils/utils");

function insertionSort(array, begin, end){
    for(let i = begin + 1; i < end; i++)
    {
        let pos = i;

        while(pos > 0 && array[pos] < array[pos-1])
        {
            swap(array,pos,pos-1);
            pos--;
        }
    }
}

module.exports = insertionSort;