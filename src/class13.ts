function som(n1:number=0,n2:number=0):number
{
    return n1+n2;
}


function newUser(user:string,pass:string,name?:string):void
{
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Name: ${name}`);
}

newUser("Alfredo","alfr");