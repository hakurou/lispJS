import PrimitiveBoolean from "./PrimitiveBoolean.js";
import UserSExp from "./UserSExp.js";

export default class ReverseBoolean extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 2)
            throw "Error, NOT require 1 argument";

        args[1].interpret(scope, register);
        const pop = register.pop();

        if (!(pop instanceof PrimitiveBoolean))
            throw "Error, the argument must be a boolean expression";

        pop.interpret(scope, register);
        const booleanValue = register.pop();

        register.push(!booleanValue);
    }
}