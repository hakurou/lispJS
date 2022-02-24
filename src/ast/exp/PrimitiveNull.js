import UserSExp from "./UserSExp.js";

export default class PrimitiveNull extends UserSExp
{
    interpret(scope, register, args){
        register.push(null);
    }
}