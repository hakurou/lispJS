import QuotedExpression from "./QuotedExpression.js";
import UserSExp from "./UserSExp.js";

export default class EvalQuoted extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 2)
            throw "Error, quote require 1 argument";

        var expr = null;
        if (!(args[1] instanceof QuotedExpression)){
            args[1].interpret(scope, register);
            expr = register.pop();
        }
        else
            expr = args[1];

        if (!(expr instanceof QuotedExpression))
            throw "Error, eval required quoted expression";

        expr.interpret(scope, register);
    }
}