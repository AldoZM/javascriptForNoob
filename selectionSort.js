/** 
* Brief description of the function here.
* @summary https://en.wikipedia.org/wiki/Bubble_sort
* @param {Array} arr - Here is the array 
* @return {Array} arr = []
*/
function selectionSort(arr) {
    if (!arr?.length) return arr;
    // repeat n times
    for (let i= 0; i < arr.length; i++){
        // find the minimum in the remainings of arr
        let minimum = arr[i]
        let minimum_position = i
        for (let j = i; j < arr.length; j++) {
            // update the pivot if we find a smaller value 
            if (arr[j] < minimum) {
                minimum = arr[j];
                minimum_position = j;
            }
        }
        // swap the current pos with the minimum found
        [arr[minimum_position], arr[i]] = [arr[i], arr[minimum_position]]
    }
    return arr;
}
export default selectionSort; 