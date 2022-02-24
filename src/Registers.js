import Register from "./Register.js";

export default class Registers
{
    constructor(){
        this.stringRegister = new Register();
        this.numberRegister = new Register();
        this.boolRegister = new Register();
        this.exprRegister = new Register();
    }

    getString(){
        return this.stringRegister;
    }

    getNum(){
        return this.numberRegister;
    }

    getBool(){
        return this.boolRegister;
    }

    getExpr(){
        return this.exprRegister;
    }
}