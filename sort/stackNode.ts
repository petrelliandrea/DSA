type Node<T> = {
	value: T,
	prev?: Node<T>, // prev because is use LIFO, is only for visual memory.
}


export default class queueNode<T> {



	public length: number;
	private head?: Node<T>;


	constructor(){
		this.head = undefined;
		// this.head first node on the list, this.tail point always on the last value in the list.
		// LIFO (Last In Last Out)   
		//  head -> 10 -> 20 -> 30 -> undefined
		//  tail -> 10 
		//  head -> 10 -> 20 -> undefined 
		//  tail -> 20 
		//  head -> 10 -> undefined
		//  tail -> 10 
		//  head -> undefined
		//  tail -> undefined
		this.length = 0;
	}

	instack(item: T):void{
		const Node = {value:item} as Node<T>;
		this.length++;
		if(!this.head){
			this.head = Node;
			return;
		}
		
		Node.prev = this.head; // point node.prev to this.head
		this.head = Node;
	}
	
	outstack(): T | undefined {
		//this.length = Math.max(0,this.length -1);
		if(this.length === 0){
			const head = this.head;
			this.head = undefined;
			return head?.value;
		}
		this.length--;
		const head = this.head as Node<T>
		this.head = this.head.prev;
		return head.value;

	}

	peek(): T | undefined {
		return this.head.value;
	}

	size(): number | undefined {
		return this.length;
	}

}
const qu = new queueNode();

qu.instack(10)
qu.instack(20)
qu.instack(30)


console.log("Number of element: " + qu.size());
console.log("HEAD: " + qu.peek());
console.log("Remove element: " + qu.outstack());	   
console.log("HEAD: " + qu.peek());
console.log("Number of element: " + qu.size());
