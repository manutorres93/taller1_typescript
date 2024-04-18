var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, titularName, balance) {
        if (balance === void 0) { balance = 0; }
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.titularName = titularName;
    }
    BankAccount.prototype.deposit = function (moneyToDeposit) {
        this.balance = this.balance + moneyToDeposit;
    };
    BankAccount.prototype.retire = function (moneyTotakeout) {
        if (moneyTotakeout > this.balance) {
            console.log("".concat(this.titularName, ": No tienes suficiente dinero para retirar esta cantidad"));
        }
        else {
            this.balance = this.balance - moneyTotakeout;
        }
    };
    BankAccount.prototype.showBalance = function () {
        console.log("Tu saldo es ".concat(this.balance));
    };
    return BankAccount;
}());
var myBankAccount = new BankAccount(1, "Manuela", 1000);
console.log(myBankAccount);
myBankAccount.deposit(5000);
console.log(myBankAccount);
myBankAccount.retire(2500);
myBankAccount.showBalance();
var mySecondBankAccount = new BankAccount(2, "Torres", 3000);
mySecondBankAccount.showBalance();
mySecondBankAccount.retire(10000);
var myThirdBankAccount = new BankAccount(3, "Vanegas");
myThirdBankAccount.showBalance();
