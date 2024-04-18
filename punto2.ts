class BankAccount {
    private accountNumber: number;
    private balance: number;
    private titularName: string

    constructor(accountNumber:number,  titularName:string, balance:number=0,){

        this.accountNumber=accountNumber;
        this.balance=balance;
        this.titularName=titularName
    }

    deposit (moneyToDeposit:number){

        this.balance= this.balance+moneyToDeposit
    }

    retire (moneyTotakeout:number){
        if (moneyTotakeout>this.balance) {
            console.log(`${this.titularName}: No tienes suficiente dinero para retirar esta cantidad`);
            
        } else {
            this.balance= this.balance-moneyTotakeout            
        }
        
    }

    showBalance(){
        console.log(`Tu saldo es ${this.balance}`);
        
    }
}

const myBankAccount= new BankAccount(1, "Manuela",1000)
console.log(myBankAccount);

myBankAccount.deposit(5000)

console.log(myBankAccount);

myBankAccount.retire(2500)

myBankAccount.showBalance()

const mySecondBankAccount= new BankAccount(2, "Torres", 3000)
mySecondBankAccount.showBalance()
mySecondBankAccount.retire(10000)

const myThirdBankAccount =new BankAccount(3,"Vanegas")
myThirdBankAccount.showBalance()


