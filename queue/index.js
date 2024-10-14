// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor () {
        this.arr = [];
    }

    add (n) {
        this.arr.push(n);
    }

    remove () {
        let n = this.arr[0]

        this.arr.splice(0, 1);

        return n;
    }
}

module.exports = Queue;
