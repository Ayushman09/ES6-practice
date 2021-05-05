class MonthlyCabPass {
    constructor(name,price,validity){
        this.name = name;
        this.price = price;
        this.validity = validity;
    }
    displayPassDetails() {
        console.log(this.name,this.price,this.validity);
    }
}

quaterlyPass = new MonthlyCabPass('Quaterly',400,30);
quaterlyPass.displayPassDetails();