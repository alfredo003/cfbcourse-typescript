"use strict";
class Conta {
    constructor(owner) {
        this.number = this.gerarNumberAccount();
        this.owner = owner;
    }
    gerarNumberAccount() {
        return Math.floor(Math.random() * 10000) + 1;
    }
}
class AccountPF extends Conta {
    constructor(cpf, owner) {
        super(owner);
        this.cpf = cpf;
    }
}
class AccountPJ extends Conta {
}
const cont1 = new AccountPF(1, "Alfredo");
console.log(cont1);
