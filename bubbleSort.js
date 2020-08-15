/** 
* Brief description of the function here.
* @summary https://en.wikipedia.org/wiki/Bubble_sort
* @param {Array} arr - Here is the array 
* @return {Array} arr = []
*/
function bubbleSort(arr) {
    if (!arr?.length) return arr;
    // Here I add a 'for' to go over the array into the 0 to 'n'
    for (let j = 0; j < arr.length; j++)
        //In this section check the array 
        for (let i = 0; i < arr.length - 1; i++) {
            // Compare
            if (arr[i + 1] < arr[i]) {
                //swap
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
            }

        }
    // Return value
    return arr;
}
export default bubbleSort; 