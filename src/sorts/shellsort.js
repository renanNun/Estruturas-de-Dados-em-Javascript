const swap = require("../utils/utils");

function shellSort(array, end){
    let h = 1; // Distância

    while(h < end) h = (h * 3) + 1;

    h = parseInt(h/3);

    let j;
    while(h > 0)
    {
        for(let i = h; i < end; i++)
        {
            j = i;
            while(j >= h && array[j - h] > array[j])
            {
                swap(array,(j - h), j);
            }
        }
        h = h/2;
    }
}

module.exports = shellSort;