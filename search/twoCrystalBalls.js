function twoCrystalBalls(array){
	let jump = Math.floor(Math.sqrt(array.length));
	let i = jump;
	for(; i< array.length;i+=jump){
		if(array[i]){
			break;
		}
	}
	
	i-=jump;

	for(let j = 0;j<=jump && i < array.length; i++,j++){
		if(array[i]){
			return i;
		}
	}
}
const array = [false,false,false,false,true,true,true];
console.log(twoCrystalBalls(array));

