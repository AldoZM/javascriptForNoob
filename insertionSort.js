/** 
* Brief description of the function here.
* @summary https://en.wikipedia.org/wiki/Bubble_sort
* @param {Array} arr - Here is the array 
* @return {Array} arr = []
*/
function insertionSort(arr) {
    if (!arr?.length) return arr;
    // repeat n times
    for (let i = 1; i < arr.length; i++) {
        let pivot = i;
        // swap until you find the right spot to insert
        while (pivot > 0 && arr[pivot - 1] > arr[pivot]) {
            // swap the current pos with the minimum found
            [arr[pivot - 1], arr[pivot]] = [arr[pivot], arr[pivot - 1]]
            pivot--;
        }
    }
    return arr;
}
export default insertionSort; 