const swap = require("../utils/utils");

function quickSort(array, begin, end){
    let i, j;
    i = begin;
    j = end;
    let pivo = array[(parseInt(begin + end)) / 2];

    while(i <= j)
    {
        while(array[i] < pivo && i < end) i++;

        while(array[j] > pivo && j > begin) j--;

        if(i <= j)
        {
            swap(array,i,j);
            i++;
            j--;
        }
    }

    if(j > begin) quickSort(array, begin, j+1);
    if(i < end) quickSort(array, i, end);
}

module.exports = quickSort;