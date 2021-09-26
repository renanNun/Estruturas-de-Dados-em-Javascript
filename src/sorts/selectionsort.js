const swap = require('../utils/utils');

function selectionSort(array, size){

    let min;

    for(let i = 0; i < size; i++)
    {
        min = i;
        for(let j = i+1; j < size; j++)
        {
            if(array[j] < array[min])
            {
                min = j;
            }
        }

        if(i != min)
        {
            swap(array,i,min);
        }
    }

}

module.exports = selectionSort;