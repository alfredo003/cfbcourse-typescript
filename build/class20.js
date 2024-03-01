"use strict";
class Conta {
    constructor(owner) {
        this.saldoConta = 0;
        this.number = this.gerarNumberAccount();
        this.owner = owner;
    }
    gerarNumberAccount() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    details() {
        console.log(`Name: ${this.owner}`);
    }
    saldo() {
        return this.saldoConta;
    }
    desposito(value) {
        this.saldoConta += value;
    }
    saque(value) {
        if (value >= this.saldoConta) {
            this.saldoConta -= value;
        }
        console.log('saldo insuficiente!');
    }
}
class AccountPF extends Conta {
    constructor(cpf, owner) {
        super(owner);
        this.cpf = cpf;
    }
    details() {
        super.details();
        console.log(`CPF: ${this.cpf}`);
    }
    desposito(value) {
        if (value > 1000) {
            console.log('Valor de deposito muito grande para esta conta!');
        }
        else {
            super.desposito(value);
        }
    }
}
class AccountPJ extends Conta {
    constructor(cnpj, owner) {
        super(owner);
        this.cnpj = cnpj;
    }
}
const cont1 = new AccountPF(1, "Alfredo");
cont1.desposito(3000000);
console.log(cont1.saldo());
