let dados = {
    name:(name:string)=>{
        console.log(name);
    },
    age:22,
    status:'A',
    greeter:(()=>{
        console.log("Hello!");
    })
}
 
dados.name("Aflredo");
dados.greeter();