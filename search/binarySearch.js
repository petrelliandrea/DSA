function binarySearch(array,num) {
	let high = array.length;
	let low = 0;
	do{
		let mid = Math.floor((low + (high - low) / 2));
		let check = array[mid];
		if(check === num)
			return true;
		else if(check > num){
			high = mid;
		}else{ 
			low = mid + 1;
		}
	}while(low < high);
	
	return false;
}

const array = [1,2,3,4,5,50,60,70,80]
const number = 60; 

console.log(binarySearch(array,number));
