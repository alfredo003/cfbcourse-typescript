class Course
{
    channel = null;
    course = null;
    constructor(channel:any,course:any)
    {
        this.channel= channel;
        this.course = course;
    }
}

let c1 = new Course("CFBcourse","Typecript");
console.log(c1.channel);
console.log(c1.course);