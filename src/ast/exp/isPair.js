import ConsCell from "./ConsCell.js";
import PrimitiveBoolean from "./PrimitiveBoolean.js";
import UserSExp from "./UserSExp.js";

export default class IsPair extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 2)
            throw "Error, pair? require 1 argument";

        args[1].interpret(scope, register);
        const pop = register.pop();
        
        register.push(new PrimitiveBoolean(pop instanceof ConsCell));
    }
}