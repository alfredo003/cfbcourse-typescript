class Conta
{
    protected number:number
    protected owner:string
    protected saldoConta:number
    
    constructor(owner:string)
    {
        this.saldoConta = 0;
        this.number=this.gerarNumberAccount();
        this.owner= owner;
    }

    private gerarNumberAccount():number
    {
        return Math.floor(Math.random() * 10000)+1;
    }

    protected details():void
    {
        console.log(`Name: ${this.owner}`);
    }
    public saldo():number
    {
        return this.saldoConta;
    }

   protected desposito(value:number):void
   {
        this.saldoConta +=value;
   }

   protected saque(value:number):void
   {
        if(value >= this.saldoConta)
        {
            this.saldoConta -= value;
        }
        console.log('saldo insuficiente!')
   }

}

class AccountPF extends Conta
{
   private cpf :number
    constructor(cpf:number,owner:string)
    {
        super(owner);
        this.cpf = cpf;
    }

    details(): void {
        super.details();
        console.log(`CPF: ${this.cpf}`);
    }
    public desposito(value:number):void
    {
        if(value>1000)
        {
           console.log('Valor de deposito muito grande para esta conta!')
        }
        else
        {
            super.desposito(value);
        }

    }
}
class AccountPJ extends Conta
{
    private cnpj :number
    constructor(cnpj:number,owner:string)
    {
        super(owner);
        this.cnpj = cnpj; 
    }
}
const cont1 = new AccountPF(1,"Alfredo");
cont1.desposito(3000000);
console.log(cont1.saldo());