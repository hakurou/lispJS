import QuotedExpression from "./QuotedExpression.js";
import UserSExp from "./UserSExp.js";

export default class Quote extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 2)
            throw "Error, quote require 1 argument";

        register.push(new QuotedExpression(args[1]));
    }
}