import AstElement from "./AstElement.js";

export default class SExp extends AstElement
{
    constructor(exprList){
        super();
        this.exprList = exprList;
    }

    interpret(scope, register){
        if (this.exprList[0].type == "NAME"){
            const symbol = scope.get().getSymbol(this.exprList[0].value);
            if (symbol == null)
                throw "Error: Symbol \"" + this.exprList[0].value + "\" not found in SEXP";
            
// console.log("Call of \"" + this.exprList[0].value + "\" with ");
// console.log(this.exprList);
            symbol.interpret(scope, register, this.exprList);
        }
        else{
            console.log("SEXPR: UNKNOWN expr");
        }
    }
}