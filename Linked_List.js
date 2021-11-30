class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null
    }

}
class LinkedList {
  constructor()
    {
        this.head = null;
        this.size = 0;
    }



printList(){
  let curr = this.head;
  let str ='';
  for (let i=0;i<this.size;i++){
    str += curr.element+' -> ';
    curr = curr.next;
  }
  str = str.slice(0,-3)
  console.log(str);
}

revList(head){
  let revstr='';
  let p1 = head;
  let p2  = null;
  while (p1){
    let temp = p1.next;//temp = 4
    p1.next = p2;//4 = null
    p2 = p1;//null = 2, null
    p1 = temp;
  }
  return p2;
  
}



add(element)
{
    var node = new Node(element);

    var current;
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
  
        // iterate to the end of the
        // list
        while (current.next) {
            current = current.next;
        }
  
        // add node
        current.next = node;
    }
    this.size++;
}

}

// // 2 -> 4 -> 8 -> 25 

list = new LinkedList();
list.add(2);list.add(4);list.add(8);list.add(25);
list.printList();


let reverse = list.revList(list.head);
let el = reverse;
revList = new LinkedList();
let next=reverse.next;
for(let i=0;i<list.size;i++){
      revList.add(el.element);
       el = el.next;     
}
revList.printList();