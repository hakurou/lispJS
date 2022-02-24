import PrimitiveBoolean from "./PrimitiveBoolean.js";
import UserSExp from "./UserSExp.js";

export default class IsEqual extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 3)
            throw "Error, the equal function requires 2 arguments";

            const values = [];

            for (let i = 1; i < args.length; ++i){
                args[i].interpret(scope, register);
                let pop = register.pop();
                if (typeof pop == "object"){
                    pop.interpret(scope, register);
                    values.push(register.pop());
                }
                else
                    values.push(pop);
            }
    
            const greater = values[0] == values[1];

        register.push(new PrimitiveBoolean(greater));
    }
}