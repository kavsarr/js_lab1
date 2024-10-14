// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let list_of_nodes = [];
    let i = 0;

    while (i>=0) {
        if (list.getAt(i)===null) {
            break;
        }
        if (list_of_nodes.includes(list.getAt(i))) {
            return true;
        }
        else {
            list_of_nodes.push(list.getAt(i))
        }
        i++;

    }

    return false;
}

module.exports = circular;
