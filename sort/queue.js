class Node {
	constructor(data){
		this.data = data;
		this.next = null;
	}
}


class Queue {
	
	public length;	
	private head = Node;
	private tail = Node;

	constructor(){
		this.head = this.tail = undefined;	
		this.length = 0;	
	}

	enqueue(item){
		const node = {value: item} as Node;
		this.length++;
		if(this.tail === 0) {
			this.tail = this.head = node;
		}

		this.tail.next = node;
		this.tail = node;
	}

	deque(){
		if(!this.head){
			return undefine;
		} 
		
		this.length--;
		
		const head = this.head;
		this.head = this.head.next;

		head.next = undefine;

		return head.value;
	}
	
	peek(){
		return this.head.value;
	}

}




const f = new Queue;
f.enque(10);
