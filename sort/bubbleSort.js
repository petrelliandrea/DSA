function bubbleSort(array){
	for(let i = 0;i<array.length;i++){ 	// Move the largest element to the end of the array. 
		for(let j = 0; j < array.length - 1 - i;j++){ 
		// Inner loop performs comparisons and swaps between pairs of adjacent elements
		// The loop gets shorter each time, because the larger elements are already sorted at the end, 
		// so there is no need to consider them in other iterations.

		if(array[j] > array[j+1]){
			let temp = array[j];
			array[j] = array[j+1];
			array[j+1] = temp;
		}

		}	
	}
	return array;
}

const arr = [2,5,90,65,87,99,233,23,1,4,23,43,1,43]

console.log(bubbleSort(arr))



