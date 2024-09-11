function linearSearch(array,num){
	let length = array.length;
	for(let i = 0;i<= array.length;i++){
		if(num === array[i]){
			return true;
		}
	}
	return false;
}



const array = [];
for (let i = 0;i<= 100;i++){
	array[i] = Math.floor(Math.random() * 100);
}

const number = Math.floor(Math.random() * 100);

console.log(linearSearch(array,number));

