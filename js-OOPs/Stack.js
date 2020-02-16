
//const _count = new WeakMap();
const _items = new WeakMap();
const _isEmpty = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);

       /*   _isEmpty.set(this, function() {
            return _items.get(this).length === 0;
        }); */ 
    }

    push(item) {
        _items.get(this).push(item);
    }

    pop() {
        const items =  _items.get(this);

        if(items.length === 0)
            throw new Error('Stack is empty');

        return items.pop();
    }

    peek() {
        const items =  _items.get(this);

        if(items.length === 0)
            throw new Error ('Stack is empty');

        return items[items.length - 1]
    }
    // read only property
    get count(){
        return _items.get(this).length;
    }
    
}

const s = new Stack();