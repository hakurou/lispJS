import { convertValueToAtom } from "../../utils.js";
import UserSExp from "./UserSExp.js";

export default class ExecLambda extends UserSExp
{
    constructor(content){
        super();
        this.contents = content;
    }

    interpret(scope, register, args){
        scope.new();
        
        if (this.contents[1].exprList.length > 0){
            for (let i = 1; i < args.length; ++i){
                args[i].interpret(scope, register);
                let exp = convertValueToAtom(register.pop());
                scope.get().addSymbol(this.contents[1].exprList[i - 1].value, exp);
            }
        }
        
        for (let i = 2; i < this.contents.length; ++i){
            this.contents[i].interpret(scope, register);
        }

        scope.back();
    }
}