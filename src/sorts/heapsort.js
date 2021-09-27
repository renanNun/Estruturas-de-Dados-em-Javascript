function heapSort(array, size){
    let i = parseInt(size / 2);
    let parent, child, t;

    while(true)
    {
        if( i > 0)
        {
            i--;
            t = array[i];
        }else{
            size--;
            if(size <= 0) return;
            t = array[size];
            array[size] = array[0];
        }

        parent = i;
        child = parseInt((i * 2) + 1);

        while(child < size)
        {
            if((child + 1 < size) && (array[child + 1] > array[child])) child++;

            if(array[child] > t)
            {
                array[parent] = array[child];
                parent = child;
                child = parseInt((parent * 2) + 1);
            }else{
                break;
            }
        }

        array[parent] = t;
    }
}

module.exports = heapSort;