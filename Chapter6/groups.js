// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

// Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it.

class Group {
    #arr = [];

    has(elem) {
        return this.#arr.includes(elem);
    }
  
    add(elem) {
      if (!this.has(elem)) {
        this.#arr.push(elem);
      }
    }
  
    delete(elem) {
      this.#arr = this.#arr.filter(v => v !== elem);
    }
  
    static from(stream) {
      let group = new Group;
      for (let elem of stream) {
        group.add(elem);
      }
      return group;
    }
}
  
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(30);
group.delete(10);
console.log(group.has(30));
console.log(group.has(10));