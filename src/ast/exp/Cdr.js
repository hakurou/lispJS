import ConsCell from "./ConsCell.js";
import UserSExp from "./UserSExp.js";

export default class Cdr extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 2)
            throw "Error, CDR require a LIST or CONS";

        args[1].interpret(scope, register);
        const pop = register.pop();

        if (!pop instanceof ConsCell)
            throw "Error, CDR require a LIST or CONS";

        pop.cell2.interpret(scope, register);
    }
}