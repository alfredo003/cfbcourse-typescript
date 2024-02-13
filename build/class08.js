"use strict";
let dados = {
    name: (name) => {
        console.log(name);
    },
    age: 22,
    status: 'A',
    greeter: (() => {
        console.log("Hello!");
    })
};
dados.name("Aflredo");
dados.greeter();
