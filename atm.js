class Bank {
    constructor(name, money) {
        this.name = name;
        this.balance = money;
    }
}

let intesaBank = new Bank("Intesa Bank", 10000);

class Atm extends Bank {
    constructor(name, money) {
        super(name, money);
    }
}

let atm1 = new Atm("Intesa Atm", 5000);

class Person extends Atm {
    constructor(name, hisMoney) {
        super(name, hisMoney);
        this.hisMoney = this.balance;
        this.hisMoneyInBank = 10000;
    }

    withdrawFromATM(amount) {
        if (this.balance < amount) {
            return `Sorry, the ATM doesn't have enough money. Please go to ${this.name} to withdraw your money.`;
        } else {
            this.balance -= amount;
            this.hisMoney += amount;
            return `You have withdrawn ${amount} from the ATM at ${this.name}. Your new balance is ${this.hisMoney}.`;
        }
    }

    withdrawFromBank(amount) {
        if (this.hisMoneyInBank < amount) {
            return `Sorry, you don't have enough money in the bank. Please deposit more money first.`;
        } else {
            this.hisMoneyInBank -= amount;
            this.hisMoney += amount;
            return `You have withdrawn ${amount} from ${this.name}. Your new balance is ${this.hisMoney}.`;
        }
    }

    depositToBank(amount) {
        if (this.hisMoney < amount) {
            return `Sorry, you don't have enough money. Please withdraw more money first.`;
        } else {
            this.hisMoney -= amount;
            this.hisMoneyInBank += amount;
            return `You have deposited ${amount} to ${this.name}. Your new balance is ${this.hisMoneyInBank}.`;
        }
    }
}


let user = new Person("Geldi",20000);
console.log(user.withdrawFromATM(3000)); 
console.log(user.withdrawFromBank(50000)); 
console.log(user.depositToBank(30000)); 
console.log(user.depositToBank(3000)); 
