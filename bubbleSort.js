/** 
* Brief description of the function here.
* @summary https://en.wikipedia.org/wiki/Bubble_sort
* @param {Array} arr - Here is the array 
* @return {Array} arr = []
*/
function bubbleSort(arr) {
    if (!arr) return arr
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j < arr.length - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
export default bubbleSort; 