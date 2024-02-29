class Computer
{
    name:string;
    ram:number;
    cpu:number;
    on:boolean;

    constructor(name:string,ram:number,cpu:number,on:boolean)
    {
        this.name = name;
        this.ram = ram;
        this.cpu = cpu;
        this.on = false;
    }
    add():void
    {
        console.log("New PC created!");
    }
}

const pc = new Computer("HP",4,2,true);
pc.add();
console.log(pc);
