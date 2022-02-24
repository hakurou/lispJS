import UserSExp from "./UserSExp.js";

export default class PrimitiveBoolean extends UserSExp
{
    constructor(value){
        super();
        this.value = value;
    }

    interpret(scope, register, args){
        register.push(this.value);
    }
}