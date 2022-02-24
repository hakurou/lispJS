import PrimitiveBoolean from "./PrimitiveBoolean.js";
import PrimitiveNull from "./PrimitiveNull.js";
import UserSExp from "./UserSExp.js";

export default class IsNull extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 2)
            throw "Error, null? require 1 argument to be boolean";
        
        args[1].interpret(scope, register);
        const pop = register.pop();
        const isNull = pop instanceof PrimitiveNull;

        register.push(new PrimitiveBoolean(isNull));
    }
}