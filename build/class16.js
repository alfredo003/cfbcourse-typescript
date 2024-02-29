"use strict";
class Computer {
    constructor(name, ram, cpu, on) {
        this.name = name;
        this.ram = ram;
        this.cpu = cpu;
        this.on = false;
    }
    add() {
        console.log("New PC created!");
    }
}
const pc = new Computer("HP", 4, 2, true);
pc.add();
console.log(pc);
