// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor () {
        this.callbacks = {};
    }
    // Register an event handler
    on(eventName, callback) {
        this.callbacks[eventName] = this.callbacks[eventName] ?? [];
        this.callbacks[eventName].push(callback);
    }

    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
        if (this.callbacks[eventName]) {
            for (let i=0; i<this.callbacks[eventName].length; i++) {
                this.callbacks[eventName][i]();
            }
        }
    }

    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
        delete this.callbacks[eventName];
    }
}

module.exports = Events;
