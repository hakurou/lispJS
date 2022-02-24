import PrimitiveBoolean from "./PrimitiveBoolean.js";
import UserSExp from "./UserSExp.js";

export default class Condition extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 3 && args.length != 4)
            throw "Error, the condition require at leat 2 argument";

        args[1].interpret(scope, register);
        const pop = register.pop();

        if (!(pop instanceof PrimitiveBoolean))
            throw "Error, the first argument must be a boolean expression";

        pop.interpret(scope, register);
        const boolValue = register.pop();

        if (boolValue)
            args[2].interpret(scope, register);
        else
            args[3].interpret(scope, register);
    }
}