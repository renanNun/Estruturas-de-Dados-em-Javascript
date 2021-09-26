const swap = require('../utils/utils');

function merge(array, begin, mid, end)
{
    let i,j,k;
    i = begin;
    j = mid + 1;
    k = begin;

    let arr = [];

    while(i <= mid && j <= end)
    {
        if(array[i] < array[j])
        {
            arr[k] = array[i];
            i++;
        }else{
            arr[k] = array[j];
            j++;
        }
        k++;
    }
    while(i <= mid)
    {
        arr[k] = array[i];
        i++;
        k++;
    }

    while(j <= end)
    {
        arr[k] = array[j];
        j++;
        k++;
    }

    for(let p = 0; p <= end; p++)
    {
        array[p + 1] = arr[p];
    }
}

function mergeSort(array, begin, end){
    if(begin < end)
    {
        let mid = (begin + end) / 2;
        mergeSort(array, begin, mid);
        mergeSort(array,mid + 1, end);
        merge(array, begin, mid, end);
    }
}

module.exports = mergeSort;