/**
 * Nó da Lista Simplismente Encadeada
 */
class Node{
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    addBegin(value){
        let newNode = new Node(value, this.head);

        if(this.head == null)
        {
            //console.log("Inserindo na lista Vazia!");
            this.head = newNode;
            this.tail = newNode.next;
        }else{
            //console.log("Inserindo na lista cheia!");
            this.head.next = newNode;
            this.head = newNode;
        }
    }

    addEnd(value){
        let newNode = new Node(value, null);

        if(this.head == null)
        {
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    remove(value){

        if(this.head == null) return;

        if(this.head.value == value){
            this.head = this.head.nest;
        }else{
            let n = this.head;
            let p = null;

            while(n.next != null)
            {
                if(n.next.value == value){
                    p = n.next;
                    n.next = n.next.next;
                    break;
                }
                n = n.next;
            }

            if(p == null) console.log(`${value} not found!`);
        }
    }

    show(){
        if(this.head == null) {
            console.log(`empty list`);
            return;
        }

        let n = this.head;

        while(n != null){
            console.log(n.value);
            n = n.next;
        }
    }
}

module.exports = LinkedList;