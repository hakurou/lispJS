import PrimitiveBoolean from "./PrimitiveBoolean.js";
import UserSExp from "./UserSExp.js";

export default class MoreThanOrEqual extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 3)
            throw "Error, the greater than or equal function requires 2 arguments";

        const values = [];

        for (let i = 1; i < args.length; ++i){
            if (args[i].type != "NUMBER"){
                args[i].interpret(scope, register);
                let pop = register.pop();
                if (pop.type != "NUMBER")
                    throw "Error, number expected";
                pop.interpret(scope, register);
                values.push(register.pop());
            }
            else {
                args[i].interpret(scope, register);
                values.push(register.pop());
            }
        }

        const greater = values[0] >= values[1];

        register.push(new PrimitiveBoolean(greater));
    }
}