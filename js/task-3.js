'use strict';

class StringBuilder {
    #value;

    constructor(value) {
        this.#value = value;
    }
    
    getValue() {
        return this.#value;
    }
    padStart(str) {
        //this.#value = str + this.#value;
        this.#value = this.#value.padStart(this.#value.length + str.length, str);
    }    
    padEnd(str) {
        // this.#value = this.#value + str;
          this.#value = this.#value.padEnd(this.#value.length + str.length, str)
    }
    padBoth(str) {
          this.#value = str + this.#value + str;
    }
} 



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
