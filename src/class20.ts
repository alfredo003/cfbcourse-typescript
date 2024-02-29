class Conta
{
    public number:number
    public owner:string
    constructor(number:number,owner:string)
    {
        this.number= number;
        this.owner= owner;
    }
}

class AccountPF extends Conta
{

}

const cont1 = new AccountPF(12,"Alfredo");

console.log(cont1.number);