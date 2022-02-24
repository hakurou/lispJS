import UserSExp from "./UserSExp.js";

export default class QuotedExpression extends UserSExp
{
    constructor(expr){
        super();
        this.expr = expr;
    }

    interpret(scope, register, args){
        this.expr.interpret(scope, register);
    }
}