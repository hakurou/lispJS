import ConsCell from "./ConsCell.js";
import UserSExp from "./UserSExp.js";

export default class Car extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 2)
            throw "Error, CAR require a LIST or CONS";

        args[1].interpret(scope, register);
        const pop = register.pop();
        
        if (!pop instanceof ConsCell)
            throw "Error, CAR require a LIST or CONS";

        pop.cell1.interpret(scope, register);
    }
}