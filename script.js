class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
      // Check if the event already exists in the listeners map
        if (!this.listeners.has(event)) {
            // If not, initialize an empty array for the event
            this.listeners.set(event, []);
			const eventListeners = this.listeners.get(event);

        // Check if the callback already exists for the event
        if (!eventListeners.includes(callback)) {
            // If not, add the callback to the event listeners array
            eventListeners.push(callback);
        }
    }
  
    removeEventListener(event, callback) {
       if (this.listeners.has(event)) {
            const eventListeners = this.listeners.get(event);
            
            // Find the index of the callback in the event listeners array
            const index = eventListeners.indexOf(callback);

            // If the callback exists, remove it from the event listeners array
            if (index !== -1) {
                eventListeners.splice(index, 1);
            }
        }
    }
  
    dispatchEvent(event) {
    if (this.listeners.has(event)) {
            const eventListeners = this.listeners.get(event);

            // Invoke each callback associated with the event
            eventListeners.forEach(callback => callback());
        }
    }
    }
    
  }
  
