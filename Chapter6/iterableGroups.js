// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.
// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.
// It is okay if your iterator behaves strangely when the group is modified during iteration.

class Group {

    constructor() {
        this.arr = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.arr.push(value);
        }
    }

    delete(value) {
        this.arr = this.arr.filter(v => v !== value);
    }

    has(value) {
        return this.arr.includes(value);
    }

    static from(collection) {
        let group = new Group();
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
    // [Symbol.iterator] is a special symbol that defines the default iterator for an object. 
    [Symbol.iterator]() {
        return new GroupIterator(this.arr);
    }
}

class GroupIterator {
    constructor(stream) {
        this.arr = stream;
        this._position = 0;
    }

    // In the context of iterators, next is a conventional method name that you need to implement for an object to be recognized as an iterator.
    // done: a boolean indicating whether the iterator has completed.
    // value: the current value of the iteration (optional if done is true).
    next() {
        if (this._position >= this.arr.length) {
            return { done: true };
        } else {
            let result = {
                value: this.arr[this._position],
                done: false
            };
            this._position++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value); 
}
